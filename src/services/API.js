const URL = 'https://economia.awesomeapi.com.br/json/all';

export const currenciesData = async () => {
  const response = await fetch(URL);
  const dataJson = await response.json();

  return dataJson;
};

export const getCurrencies = async () => {
  const response = await currenciesData();
  const coins = Object.keys(response).filter((code) => code !== 'USDT');
  return coins;
};
