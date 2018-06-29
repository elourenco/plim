import { AsyncStorage } from 'react-native';
import firebase from '../../../config/firebase';
import typeActions from './payment-type';

const stateValidate = () => {
  return {
    type: typeActions.PAYMENT_VALIDATE
  };
};

const stateMonthlyStatement = (monthlyStatement) => {
  return {
    type: typeActions.PAYMENT_MONTHLY_STATEMENT,
    monthlyStatement
  };
};

const stateFailed = (error) => {
  return {
    type: typeActions.PAYMENT_FAILED,
    error
  };
};

const monthlyStatement = (monthNumber) => {
  return async dispatch => {
    try {
      dispatch(stateValidate);
      const userUID = await AsyncStorage.getItem('@user.uid');
      const profiles = await firebase.firestore.collection('profiles').doc(userUID).get();
      
      const listPurchases = profiles.data().purchases.filter(p => {
        return p.createDate.toDate().getMonth() === monthNumber
      });
  
      dispatch(stateMonthlyStatement(listPurchases));
    } catch (err) {
      console.log(err);
      dispatch(stateFailed(err));
      throw err;
    }
  }
}

export default {
  monthlyStatement
}