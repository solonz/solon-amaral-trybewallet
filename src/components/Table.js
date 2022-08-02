import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <div>
        <table>
          <th>Valor</th>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Método de pagamento</th>
          <th>Editar/Excluir</th>
          {expenses.map((e) => (
            <tr key={ expenses[e] }>
              <td>
                {e.value}
              </td>
              <td>
                {e.description}
              </td>
              <td>
                {e.tag}
              </td>
              <td>
                {e.currency}
              </td>
              <td>
                {parseFloat(e.exchangeRates[e.currency].ask).toFixed(2)}
              </td>
              <td>
                {parseFloat(e.exchangeRates[e.currency].ask * e.value).toFixed(2)}
              </td>
              <td>
                Real
              </td>
              <td>
                {e.method}
              </td>
              <td>
                <button type="button"> Editar </button>
                <button type="button"> Excluir </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.string.isRequired,
  // value: PropTypes.number.isRequired,
  // tag: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // method: PropTypes.string.isRequired,
  // currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
