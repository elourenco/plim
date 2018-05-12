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

const signUpProfile = (profile) => {
  return async (dispatch) => {
    try {
      const { cpf, name, email } = profile;
      dispatch(stateSignUpValidate());
      const user = await firebase.auth.createUserWithEmailAndPassword(profile.email, profile.password)
      const profileDb = await firebase.firestore.collection('profiles').doc(user.uid).set({ cpf, name, email })
      if (user) {
        console.log(user);
        await AsyncStorage.setItem('@user.uid', user.uid);
        dispatch(stateSignUpProfile({ cpf, name, email}));
      }
    }
    catch(e) {
      dispatch(stateSignFailed(e));
    }
  };
};

const signUpAndressByCep = (cepStr) => {
  return dispatch => {
    const viaCep = new ViaCep({type: 'json'});
    const address = viaCep.zipCod.getZip(cepStr);
    address.then(res => { 
      dispatch(stateSignUpAddress(res)) 
    })
    .catch(err => {
      dispatch(stateSignFailed(err))
    })
  }
}

export default {
  signUpProfile
};