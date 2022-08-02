import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../redux/store';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { currency } = this.state;
    const { totalField } = this.props;
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
          <h3>
            Despesa Total R$
            {' '}
            <span data-testid="total-field">
              {totalField.toFixed(2)}
            </span>
            <span data-testid="header-currency-field">
              {currency}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  totalField: state.wallet.totalField,
});

Header.propTypes = {
  totalField: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
