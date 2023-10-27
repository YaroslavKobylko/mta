import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

function Statistics() {
  const location = useLocation();
  const { transactions } = location.state || { transactions: [] };

  const [searchDate, setSearchDate] = useState(''); // Дата пошуку за датою
  const [searchResults, setSearchResults] = useState([]); // Результати пошуку за датою
  const [incomeResult, setIncomeResult] = useState(0); // Сума прибуткових транзакцій
  const [expenseResult, setExpenseResult] = useState(0); // Сума витрат

  // Функція для пошуку транзакцій за обраною датою
  const searchTransactions = () => {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.date === searchDate;
    });

    setSearchResults(filteredTransactions);
  };

  // Функція для розрахунку суми за обраний період
  const calculateTotalForPeriod = (startDate, endDate, isIncome) => {
    const filteredTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const isTransactionIncome = transaction.value > 0;
      return (
        transactionDate >= startDate &&
        transactionDate <= endDate &&
        (isIncome ? isTransactionIncome : !isTransactionIncome)
      );
    });

    const total = filteredTransactions.reduce((acc, transaction) => {
      return acc + transaction.value;
    }, 0);

    return total;
  };

  // Функція для розрахунку прибутку та витрат
  const calculateIncomeAndExpense = (isIncome) => {
    const currentDate = new Date();
    const lastWeek = new Date(currentDate);
    lastWeek.setDate(currentDate.getDate() - 7);
    const lastMonth = new Date(currentDate);
    lastMonth.setMonth(currentDate.getMonth() - 1);
    const lastQuarter = new Date(currentDate);
    lastQuarter.setMonth(currentDate.getMonth() - 3);
    const lastYear = new Date(currentDate);
    lastYear.setFullYear(currentDate.getFullYear() - 1);

    const lastWeekTotal = calculateTotalForPeriod(lastWeek, currentDate, isIncome);
    const lastMonthTotal = calculateTotalForPeriod(lastMonth, currentDate, isIncome);
    const lastQuarterTotal = calculateTotalForPeriod(lastQuarter, currentDate, isIncome);
    const lastYearTotal = calculateTotalForPeriod(lastYear, currentDate, isIncome);

    if (isIncome) {
      setIncomeResult({
        lastWeek: lastWeekTotal,
        lastMonth: lastMonthTotal,
        lastQuarter: lastQuarterTotal,
        lastYear: lastYearTotal,
      });
    } else {
      setExpenseResult({
        lastWeek: lastWeekTotal,
        lastMonth: lastMonthTotal,
        lastQuarter: lastQuarterTotal,
        lastYear: lastYearTotal,
      });
    }
  };

  return (
    <div className='StatisticsPage'>
      <h1>Статистика транзакцій</h1>
      <div className="search-container">
        <div>
        <label>
          Введіть дату пошуку:
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </label>
        </div>
        <div className='search-button-container'>
        <button className="search-button"  onClick={searchTransactions}>
        <div class="box">S</div>
        <div class="box">E</div>
        <div class="box">A</div>
        <div class="box">R</div>
        <div class="box">C</div>
        <div class="box">H</div>
        </button>
        </div>
      </div>

      <ul className="search-results">
        {searchResults.map((transaction, index) => (
          <li key={index}>
            {`Значення: ${transaction.value}, Дата: ${transaction.date}, Коментар: ${transaction.comment}`}
          </li>
        ))}
      </ul>

      <div>
        <div className="income-container">
          <button className="calculate-button-green" onClick={() => calculateIncomeAndExpense(true)}>
            Підрахувати прибуток
          </button>
          <div className="income-results">
            <p>Сума прибутку за останній тиждень: {incomeResult.lastWeek}</p>
            <p>Сума прибутку за останній місяць: {incomeResult.lastMonth}</p>
            <p>Сума прибутку за останній квартал: {incomeResult.lastQuarter}</p>
            <p>Сума прибутку за останній рік: {incomeResult.lastYear}</p>
          </div>
        </div>

        <div className="expense-container">
          <button className="calculate-button-red" onClick={() => calculateIncomeAndExpense(false)}>
            Підрахувати витрати
          </button>
          <div className="expense-results">
            <p>Сума витрат за останній тиждень: {expenseResult.lastWeek}</p>
            <p>Сума витрат за останній місяць: {expenseResult.lastMonth}</p>
            <p>Сума витрат за останній квартал: {expenseResult.lastQuarter}</p>
            <p>Сума витрат за останній рік: {expenseResult.lastYear}</p>
          </div>
        </div>
      </div>
      <div className='buttonHome'>
        <Link to="/home" state={{ transactions: transactions }}>
          {/* eslint-disable-next-line */}
          <a className="swipe">
            Go Home
            <span className="containerbutton">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Statistics;