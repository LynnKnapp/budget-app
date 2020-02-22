import React, {useState} from 'react'
import Alert from './components/Alert'
import ExpenseList from'./components/ExpenseList.js'
import ExpenseForm from'./components/ExpenseForm.js'
import './styles/styles.css'
import uuid from 'uuid/v4'

const initialExpenses = [
  {id: uuid(), charge:'mortgage', amount: 1250},
  {id: uuid(), charge:'auto payment', amount: 450},
  {id: uuid(), charge:'insurance', amount: 500},
  {id: uuid(), charge:'credit cards', amount: 1000},

]

function App () {
  
  const [expenses, setExpenses] = useState(initialExpenses)
  
  
  
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <div className='App'>
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </div>
      <h1>
        Total Spending: 
        <span className='total'>
         $ {expenses.reduce((acc, curr) =>{
           return (acc + curr.amount)
         },0)}
        </span>
      </h1>
    </>
  )
}

export default App
