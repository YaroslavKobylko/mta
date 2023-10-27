import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';
import ErrorBoundary from '../ErrorBoundary';
import { Wrapper } from './styles';
import "./styles.css"

let id = 0;

function Home() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleChange = ({ value, date, comment }) => {
    const newTransaction = { value: +value, comment, date, id: ++id };
    const updatedTransactions = [newTransaction, ...transactions];
    setTransactions(updatedTransactions);
    setBalance(balance + Number(value));
  };

  return (
    <ErrorBoundary>
      <Wrapper>
        <Balance balance={balance}></Balance>
        <Form onChange={handleChange} />
        <Link to="/statistics" state={{ transactions: transactions }}>
      <a className="swipe">
        Go to Statistics
        <span className="containerbutton">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
          </svg>
        </span>
      </a>
    </Link>
        <hr />
        <Transactions transactions={transactions} />
      </Wrapper>
    </ErrorBoundary>
  );
}

export default Home;