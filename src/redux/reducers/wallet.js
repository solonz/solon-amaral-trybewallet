// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_FORM_TO_TABLE, FETCH_API, CURRENCY_ASK, DELETE_EXPENSE } from '../actions';

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
      // totalField: state.totalField + action.ask,
      totalField: state.expenses.length < 1 ? 0 : state.expenses.reduce((acc, curr) => {
        const { value, currency, exchangeRates } = curr;
        const { ask } = exchangeRates[currency];
        const conversion = parseFloat(ask) * parseFloat(value);
        return acc + conversion;
      }, 0),
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expenseId),
    };
  default:
    return state;
  }
};

export default walletData;
