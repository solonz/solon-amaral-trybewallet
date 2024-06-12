import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, currencyAsk, editExpense } from '../redux/actions';

class Table extends Component {
  deleteExpense(expenseId) {
    const { deleteExpenseDispatch, currencyAskDispatch } = this.props;
    deleteExpenseDispatch(expenseId);
    currencyAskDispatch();
  }

  editExpense(expenseId) {
    const { editExpenseDispatch } = this.props;
    editExpenseDispatch(expenseId);
  }

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Método de pagamento</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={ e.id }>
                <td>
                  {parseFloat(e.value).toFixed(2)}
                </td>
                <td>
                  {e.description}
                </td>
                <td>
                  {e.tag}
                </td>
                <td>
                  {e.exchangeRates[e.currency].name}
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
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => { this.editExpense(e.id); } }
                  >
                    {' '}
                    Editar
                    {' '}

                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => { this.deleteExpense(e.id); } }
                  >
                    {' '}
                    Excluir
                    {' '}

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatch: (expenseId) => dispatch(deleteExpense(expenseId)),
  currencyAskDispatch: (ask) => dispatch(currencyAsk(ask)),
  editExpenseDispatch: (expenseId) => dispatch(editExpense(expenseId)),
});

Table.propTypes = {
  expenses: PropTypes.string.isRequired,
  currencyAskDispatch: PropTypes.func.isRequired,
  deleteExpenseDispatch: PropTypes.func.isRequired,
  editExpenseDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
