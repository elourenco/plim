import {
  AsyncStorage
} from 'react-native';
import packageInfo from '../../../../package.json';
import typesAuthActions from './auth-types';
import ViaCep from 'node-viacep';
import firebase from '../../../config/firebase';

const stateSignUpValidate = () => {
  return {
    type: typesAuthActions.SIGN_UP_VALIDATE
  };
};

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

const signUpUpdateProfileWithAddress = async (address) => {
  try {
    const userUID = await AsyncStorage.getItem('@user.uid');
    const profile = await firebase.firestore
      .collection('profiles')
      .doc(userUID)
      .set({ address }, {merge: true});
  } catch (e) {
    throw e;
  }
}

const signUpProfile = (profile) => {
  return async (dispatch) => {
    try {
      const { cpf, name, email } = profile;
      dispatch(stateSignUpValidate());
      const user = await firebase.auth.createUserWithEmailAndPassword(profile.email, profile.password)
      const profileDb = await firebase.firestore.collection('profiles').doc(user.uid).set({ cpf, name, email })
      if (user) {
        await AsyncStorage.setItem('@user.uid', user.uid);
        dispatch(stateSignUpProfile({ cpf, name, email}));
      }
    }
    catch(e) {
      dispatch(stateSignFailed(e));
      throw e;
    }
  };
};

const signUpAddressByCep = (cepStr) => {
  return dispatch => {
    try {
      const viaCep = new ViaCep({type: 'json'});
      dispatch(stateSignUpValidate());
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

export default {
  signUpProfile,
  signUpAddressByCep,
  signUpUpdateProfileWithAddress
};