import getCurrencies from '../../services/API';

// Coloque aqui suas actions
export const LOGIN_CLICK_SUCCEED = 'LOGIN_CLICK_SUCCEED';
export const FETCH_API = 'FETCH_API';
export const FAILURE_API = 'FAILURE_API';

export const loginClick = (payload) => ({ type: LOGIN_CLICK_SUCCEED, payload });
export const successAPI = (currencies) => ({ type: FETCH_API, currencies });
export const failureAPI = (error) => ({ type: FAILURE_API, error });

export function fetchAPI() {
  return async (dispatch) => {
    const response = await getCurrencies();
    dispatch(successAPI(response));
  };
}
