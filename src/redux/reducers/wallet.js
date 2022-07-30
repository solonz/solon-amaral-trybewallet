// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_API } from '../actions';

const INITIAL_STATE = {
  description: '',
  tag: '',
  method: '',
  value: 0,
  currencies: [],
};

const walletData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default walletData;
