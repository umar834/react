import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'
import './ExpenseItem.css'

var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
function ExpenseItem(props) {
  const [filterValue, setFilterValue] = useState('2020');

  const setSelectedYear = year => {
    setFilterValue(year)
  }

  var filteredValues = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filterValue;
  });
    return (
      <div>
        <ExpenseFilter selected={filterValue} selectedYear={setSelectedYear} />
        {filteredValues.map((expense) => (
          <div>
            <h2>{expense.name}</h2>
            <h3>{expense.amount}</h3>
            <h4>{expense.date.toLocaleString('en-US', options)}</h4>
          </div>
        ))}
      </div>
    );
  }
  
  export default ExpenseItem;