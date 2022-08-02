import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addFormToTable, currencyAsk, Alimentacao } from '../redux/actions';
import { currenciesData } from '../services/API';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: Alimentacao,
      exchangeRates: [],
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async exchange() {
    const { currencyAskDispatch, addFormToTableDispatch } = this.props;
    const { currency, value } = this.state;
    const currenciesRate = await currenciesData();
    this.setState({ exchangeRates: currenciesRate },
      () => { addFormToTableDispatch(this.state); });
    const rate = currenciesRate[currency];
    const conversion = rate.ask * value;
    currencyAskDispatch(conversion);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: Alimentacao,
      exchangeRates: [],
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            data-testid="value-input"
            placeholder="0.00"
            onChange={ (event) => this.setState({ value: event.target.value }) }
            value={ value }
          />
        </label>
        <label htmlFor="description-input">
          Despesa:
          <input
            type="text"
            data-testid="description-input"
            placeholder="minha despesa"
            onChange={ (event) => this.setState({ description: event.target.value }) }
            value={ description }
          />
        </label>
        Moeda:
        <select
          data-testid="currency-input"
          onChange={ (event) => this.setState({ currency: event.target.value }) }
          value={ currency }
        >
          {currencies.map((code) => (
            <option key={ code }>
              {' '}
              {code}
              {' '}
            </option>
          ))}
        </select>
        Método:
        <select
          data-testid="method-input"
          onChange={ (event) => this.setState({ method: event.target.value }) }
          value={ method }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        Categoria:
        <select
          data-testid="tag-input"
          onChange={ (event) => this.setState({ tag: event.target.value }) }
          value={ tag }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button
          type="button"
          onClick={ () => { this.exchange(); } }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  addFormToTableDispatch: (state) => dispatch(addFormToTable(state)),
  currencyAskDispatch: (ask) => dispatch(currencyAsk(ask)),
});

WalletForm.propTypes = {
  currencies: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addFormToTableDispatch: PropTypes.func.isRequired,
  currencyAskDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
