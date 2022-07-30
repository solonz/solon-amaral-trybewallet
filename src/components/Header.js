import React, { Component } from 'react';
import store from '../redux/store';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      totalField: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { totalField, currency } = this.state;
    return (
      <div>
        <h1>Your Wallet</h1>
        <div>
          <h3 data-testid="email-field">
            {' '}
            Usuário:
            {' '}
            {store.getState().user.email}
          </h3>
          <h3 data-testid="total-field">
            Despesa Total R$
            {' '}
            {totalField}
            {' '}
            <span data-testid="header-currency-field">
              {currency}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}
