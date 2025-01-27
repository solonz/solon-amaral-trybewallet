import { getCurrencies } from '../../services/API';

// Coloque aqui suas actions
export const LOGIN_CLICK_SUCCEED = 'LOGIN_CLICK_SUCCEED';
export const FETCH_API = 'FETCH_API';
export const FAILURE_API = 'FAILURE_API';
export const ADD_FORM_TO_TABLE = 'ADD_FORM_TO_TABLE';
export const CURRENCY_ASK = 'CURRENCY_ASK';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const Alimentacao = 'Alimentação';

export const loginClick = (payload) => ({ type: LOGIN_CLICK_SUCCEED, payload });
export const successAPI = (currencies) => ({ type: FETCH_API, currencies });
export const failureAPI = (error) => ({ type: FAILURE_API, error });
export const addFormToTable = (state) => ({ type: ADD_FORM_TO_TABLE, state });
export const currencyAsk = () => ({ type: CURRENCY_ASK });
export const deleteExpense = (expenseId) => ({ type: DELETE_EXPENSE, expenseId });
export const editExpense = (expenseId) => ({ type: EDIT_EXPENSE, expenseId });

export function fetchAPI() {
  return async (dispatch) => {
    const response = await getCurrencies();
    dispatch(successAPI(response));
  };
}
