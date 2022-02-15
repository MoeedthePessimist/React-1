import React from 'react'


import './NewExpense.css';
import ExpenseForm from './expenseForm/ExpenseForm';

const NewExpense = ({ onAddExpense }) => {





  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e${Math.random().toString()}`,
    }
    onAddExpense(expenseData);

    // console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {onSaveExpenseData}/>
    </div>
  )
}

export default NewExpense;