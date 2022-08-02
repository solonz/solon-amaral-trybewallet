// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_FORM_TO_TABLE, FETCH_API, CURRENCY_ASK } from '../actions';

const INITIAL_STATE = {
  description: '',
  tag: '',
  method: '',
  value: 0,
  currencies: [],
  expenses: [],
  totalField: 0,
};

const walletData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_FORM_TO_TABLE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.state, id: state.expenses.length }],
    };
  case CURRENCY_ASK:
    return {
      ...state,
      totalField: state.totalField + action.ask,
    };
  default:
    return state;
  }
};

export default walletData;
