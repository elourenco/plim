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
  return (dispatch) => {

    dispatch(stateSignUpValidate());

    firebase.auth
      .createUserWithEmailAndPassword(profile.email, profile.password)
      .then(user => {
        
        const { cpf, name, email} = profile;

        user.updateProfile({ displayName: name });
        
        console.log('>>>> Profile: ', profile);
        
        firebase.firestore.collection('profiles')
          .doc(user.uid)
          .set({ cpf, name, email })
          .then(data => {
            dispatch(stateSignUpProfile({ cpf, name, email}));
          })
          .catch(err => {
            dispatch(stateSignFailed(err));
          });
      })
      .catch(err => {
        dispatch(stateSignFailed(err));
      })
  };
};

export default {
  signUpProfile
};