import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expences } = this.props;
    console.log(expences);
    // , tag, description, method, currency
    return (
      <div>
        {' '}
        teste
        {/* {expences.map((e) => (
          <tr key={ expences[e] }>
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
              {e.method}
            </td>
            <td>
              {e.currency}
            </td>
          </tr>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expences: state.wallet.expences,
});

Table.propTypes = {
  expences: PropTypes.string.isRequired,
  // value: PropTypes.number.isRequired,
  // tag: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // method: PropTypes.string.isRequired,
  // currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
