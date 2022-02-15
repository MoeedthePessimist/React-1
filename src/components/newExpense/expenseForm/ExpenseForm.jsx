import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {



    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeAmount = (e) => {
        setAmount(e.target.value);
    }

    const changeDate = (e) => {
        setDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date),
        };

        // console.log(expenseData);
        onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');

    }

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={changeTitle} type="text" value={title}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input value={amount} onChange={changeAmount} type="number" min={0.01} step={0.01}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input value={date} onChange={changeDate} type="date" min={`2019-01-01`} max={`2022-12-31`}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  );
};

export default ExpenseForm;