import {
  AsyncStorage
} from 'react-native';
import packageInfo from '../../../../package.json';
import typesAuthActions from './auth-types';
import ViaCep from 'node-viacep';
import firebase from '../../../config/firebase';

const stateSignInProfile = (profile) => {
  return {
    type: typesAuthActions.SIGN_IN_PROFILE,
    profile
  };
};

const stateSignValidate = () => {
  return {
    type: typesAuthActions.SIGN_VALIDATE
  };
};

const stateSignOutProfile = () => {
  return {
    type: typesAuthActions.SIGN_OUT_USER
  }
}

const stateSignProfile = (profile) => {
  return {
    type: typesAuthActions.SIGN_PROFILE,
    profile
  }
}

const stateSignUpProfile = (profile) => {
  return {
    type: typesAuthActions.SIGN_UP_PROFILE,
    profile
  };
};

const stateSignFailed = (error) => {
  return {
    type: typesAuthActions.SIGN_FAILED,
    error
  }
}

const stateSignUpAddress = (address) => {
  return {
    type: typesAuthActions.SIGN_UP_ADDRESS,
    address
  }
}


const signProfile = () => {
  return async dispatch => {
    try {
      dispatch(stateSignValidate());
      const userUID = await AsyncStorage.getItem('@user.uid');
      const profile = await firebase.firestore.collection('profiles').doc(userUID).get();
      dispatch(stateSignProfile(profile.data())); 
      
    }
    catch(e) {
      dispatch(stateSignFailed(e));
      throw e;
    }
  }
}

const signOutProfile = () => {
  return async dispatch => {
    try {
      dispatch(stateSignValidate());
      await firebase.auth.signOut();
      await AsyncStorage.removeItem('@user.uid');
      dispatch(stateSignOutProfile());
    }
    catch (e) {
      dispatch(stateSignFailed(e));
      throw e;
    }
  }
}

const signUpUpdateProfileWithAddress = (address) => {
  return async (dispatch) => {
    try {
      const userUID = await AsyncStorage.getItem('@user.uid');
      const addressUpdate = await firebase.firestore.collection('profiles')
        .doc(userUID)
        .set({ address }, { merge: true });
      dispatch(stateSignUpAddress(address));
    } catch (e) {
      throw e;
    }
  }
}

const signUpProfile = (profile) => {
  return async (dispatch) => {
    try {
      const { cpf, name, email } = profile;
      dispatch(stateSignValidate());
      const user = await firebase.auth.createUserWithEmailAndPassword(profile.email, profile.password)
      const profileDb = await firebase.firestore.collection('profiles').doc(user.uid).set({ cpf, name, email })
      if (user) {
        await AsyncStorage.setItem('@user.uid', user.uid);
        dispatch(stateSignUpProfile({ cpf, name, email }));
      }
    }
    catch (e) {
      dispatch(stateSignFailed(e));
      throw e;
    }
  };
};

const signUpAddressByCep = (cepStr) => {
  return dispatch => {
    try {
      const viaCep = new ViaCep({ type: 'json' });
      dispatch(stateSignValidate());
      const address = viaCep.zipCod.getZip(cepStr);
      address.then(data => data.json())
        .then(res => {
          dispatch(stateSignUpAddress(res));
        })
        .catch(err => dispatch(stateSignFailed(err)));
    } catch (e) {
      throw e;
    }

  }
}

const signInProfile = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(stateSignValidate());
      const user = await firebase.auth.signInWithEmailAndPassword(email, password);
      const docProfile = await firebase.firestore.collection('profiles').doc(user.uid)
      const profile = await docProfile.get();
      console.log('user:', user);
      console.log('profile:', profile.data());
      if (user && profile) {
        await AsyncStorage.setItem('@user.uid', user.uid);
        dispatch(stateSignInProfile(profile.data()));
      }
    }
    catch (e) {
      dispatch(stateSignFailed(e));
      throw e;
    }
  };
};

export default {
  signProfile,
  signOutProfile,
  signInProfile,
  signUpProfile,
  signUpAddressByCep,
  signUpUpdateProfileWithAddress
};