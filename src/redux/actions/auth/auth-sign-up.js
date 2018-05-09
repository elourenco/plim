import packageInfo from '../../../../package.json';
import typesAuthActions from './auth-types';
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

const signUpProfile = (profile) => {
  return async (dispatch) => {
    try {
      const { cpf, name, email } = profile;
      dispatch(stateSignUpValidate());
      const user = await firebase.auth.createUserWithEmailAndPassword(profile.email, profile.password)
      const profileDb = await firebase.firestore.collection('profiles').doc(user.uid).set({ cpf, name, email })
      dispatch(stateSignUpProfile({ cpf, name, email}));
    }
    catch(e) {
      dispatch(stateSignFailed(e));
    }
  };
};

export default {
  signUpProfile
};