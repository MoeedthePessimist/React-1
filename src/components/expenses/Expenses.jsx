
import React, { useState } from 'react';

import ExpensesFilter from './expenseFilter/ExpenseFilter';
import Card from './card/Card';

import ExpensesList from './expensesList/ExpensesList';
import './Expenses.css';
import ExpensesChart from './expensesChart/ExpensesChart';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;