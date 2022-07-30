import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            data-testid="value-input"
            placeholder="0.00"
          />
        </label>
        <label htmlFor="description-input">
          Despesa:
          <input
            type="text"
            data-testid="description-input"
            placeholder="minha despesa"
          />
        </label>
        Moeda:
        <select data-testid="currency-input">
          {currencies.map((currency) => (
            <option key={ currency }>
              {' '}
              {currency}
              {' '}
            </option>
          ))}
        </select>
        Método:
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        Categoria:
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

WalletForm.propTypes = {
  currencies: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
