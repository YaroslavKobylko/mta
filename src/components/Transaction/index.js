import React from 'react';
import PropTypes from 'prop-types';
import './transaction.css';

const Transaction = ({ transaction: { value, date, comment } }) => (
  <div className="transaction-container">
    <div className={`transaction-wrapper ${value < 0 ? 'red' : 'green'}`}>
      <div className="transaction-date">{date}</div>
      <div className="value">{value.toFixed(2)}</div>
      <div className="comment">{comment}</div>
    </div>
  </div>
);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

Transaction.defaultProps = {
  transaction: {
    label: '',
    value: 0,
  },
};

export default Transaction;