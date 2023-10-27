import React from 'react';
import './balance.css';

const Balance = ({ balance }) => {
  const getStatusClass = (balance) => {
    if (balance === 0) {
      return 'zero';
    } else if (balance < 0) {
      return 'negative';
    } else {
      return 'positive';
    }
  };

  return (
    <div className={`balance-container ${getStatusClass(balance)}`}>
      {balance === 0 ? 'Повний нуль, ' : balance < 0 ? 'Менше нуля, ' : 'Ми в плюсі, '}
      поточний баланс: <br /><span className="balance-amount">{balance}</span>
    </div>
  );
};

export default Balance;