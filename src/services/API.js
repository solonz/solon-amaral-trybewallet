const URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(URL);
  const json = await response.json();

  const coins = Object.keys(json).filter((moedas) => moedas !== 'USDT');
  return coins;
};

export default getCurrencies;
