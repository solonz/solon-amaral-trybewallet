// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN_CLICK_SUCCEED':
    return action.data;
  default:
    return state;
  }
};

export default user;
