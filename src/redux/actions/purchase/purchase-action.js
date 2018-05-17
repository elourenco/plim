import firebase from '../../../config/firebase';
import typeActions from './purchase-type';

const stateValidate = () => {
  return {
    type: typeActions.PURCHASE_VALIDATE
  };
}

const stateListFunders = (funders) => {
  return {
    type: typeActions.PURCHASE_LIST_FUNDERS,
    funders
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

const fundersByUser = (user) => {
  return async dispatch => {
    try {
      dispatch(stateValidate());
      const listFunders = await firebase.firestore.collection('funders').doc(user).collection('approved').get();
      dispatch(stateListFunders(listFunders.data()));
    } catch(e) {
      console.log(e);
      dispatch(stateFailed(e));
      throw e;
    }
  }
}

const selectFunder = (funder) => {
  return dispatch => {
    dispatch(stateSelectedFunder(funder));
  }
}

export default {
  fundersByUser,
  selectFunder
};