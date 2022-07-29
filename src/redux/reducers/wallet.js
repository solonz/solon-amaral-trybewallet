// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  description: '',
  tag: '',
  method: '',
  value: 0,
  currency: '',
};

const walletData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default walletData;
