import { AsyncStorage } from 'react-native';
import firebase from '../../../config/firebase';
import typeActions from './purchase-type';

const stateValidate = () => {
  return {
    type: typeActions.PURCHASE_VALIDATE
  };
}

const statePurchaseCodeValidated = (purchase) => {
  return {
    type: typeActions.PURCHASE_CODE_VALIDATED,
    purchase
  }
}

const statePurchaseCodeInvalid = () => {
  return {
    type: typeActions.PRUCHASE_CODE_INVALID,
  }
}

const stateListFunders = (funders) => {
  return {
    type: typeActions.PURCHASE_LIST_FUNDERS,
    funders
  };
}

const stateFundersByUser = (fundersByUser) => {
  return {
    type: typeActions.PURCHASE_FUNDERS_BY_USER,
    fundersByUser
  };
}

const stateSelectedFunder = (funder) => {
  return {
    type: typeActions.PURCHASE_SELECTED_FUNDER,
    funder
  };
}

const stateFailed = (error) => {
  return {
    type: typeActions.PURCHASE_FAILED,
    error
  };
}

const stateApplyFunder = () => {
  return {
    type: typeActions.PURCHASE_APPLY_FUNDER
  };
}

// ################################################################################

const applyFundersByUser = (funder) => {
  return async dispatch => {
    try {
      dispatch(stateValidate());
      const userUID = await AsyncStorage.getItem('@user.uid');
      const profiles = await firebase.firestore.collection('profiles').doc(userUID).get();
      const profilesUpdate = await firebase.firestore.collection('profiles').doc(userUID);

      let listFunders = profiles.data().funders;
      listFunders.push(funder);

      profilesUpdate.set({ funders: listFunders }, { merge: true });

      dispatch(stateApplyFunder());
      
    } catch (e) {
      console.log(e);
      dispatch(stateFailed(e));
      throw e;
    }
  }
}


const fundersByUser = () => {
  return async dispatch => {
    try {
      dispatch(stateValidate());
      const userUID = await AsyncStorage.getItem('@user.uid');
      const profiles = await firebase.firestore.collection('profiles').doc(userUID).get()
      const FundersRefsPromises = []
      listFunders = profiles.data().funders;

      dispatch(stateFundersByUser(listFunders));
  
    } catch (e) {
      console.log(e);
      dispatch(stateFailed(e));
      throw e;
    }
  }
}

const listFunders = () => {
  return async dispatch => {
    try {
      dispatch(stateValidate());
      let listFunders = await firebase.firestore.collection('funders').get()
      listFunders = listFunders.docs.map(d => d.data());
      dispatch(stateListFunders(listFunders));

    } catch (e) {
      console.log(e);
      dispatch(stateFailed(e));
      throw e;
    }
  }
}

const selectFunder = (funder) => {
  return async dispatch => {
    await dispatch(stateSelectedFunder(funder));
  }
}

const validatePurchase = (code) => {
  return async dispatch => {
    try {
      dispatch(stateValidate());
      const userUID = await AsyncStorage.getItem('@user.uid');
      const purchase = await firebase.firestore.collection('purchases')
        .doc(userUID).collection(code).get();
      if (!purchase.empty) {
        const purchaseFirst = purchase.docs.map(d => d.data())[0];
        dispatch(statePurchaseCodeValidated(purchaseFirst));
      } else {
        dispatch(statePurchaseCodeInvalid());
        throw {}
      }
    } catch (e) {
      dispatch(stateFailed(e));
      throw e
    }
  }
}

export default {
  fundersByUser,
  selectFunder,
  validatePurchase,
  listFunders,
  applyFundersByUser
};