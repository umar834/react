import React, { useState } from 'react'
import MyForm from './components/MyForm'
import ExpenseItem from './components/ExpenseItem'

var DUMMMY_DATA = [
  {id: 1, name: 'Ali', amount: 30, date: new Date(2022, 1, 12)},
  {id: 2, name: 'Umar', amount: 35, date: new Date(2022, 1, 13)},
  {id: 3, name: 'Hassan', amount: 33, date: new Date(2022, 1, 14)}
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMMY_DATA);
  const getFromData = (data) =>{
    setExpenses(prevExpenses =>{
      var new_array = [data, ...prevExpenses];
      console.log(new_array);
      return new_array;
    })
  }
  return (
    <div>
      <MyForm onFormFields={getFromData} />
      <ExpenseItem data={expenses}/>
    </div>
  )
}

export default App;
