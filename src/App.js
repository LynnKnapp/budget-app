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
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show:false})

  const handleCharge = e =>{
    setCharge(e.target.value)
  }

  const handleAmount = e =>{
    setAmount(e.target.value)
  }

  const handleAlert = ({type, text}) =>{
    setAlert({show: true ,type, text})
    setTimeout(() =>{
      setAlert({show: false})
    }, 4000)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    if (charge !== '' && amount > 0){
      const singleExpense = {id:uuid(),charge,amount}
      setExpenses([...expenses,singleExpense])
      setCharge('')
      setAmount('')
      handleAlert({type: 'success', text: 'item added'})
    }else{
      handleAlert({type: 'danger', text: "can't be an empty value & amount must be larger than 0"})
    }
  }


const handleDelete = (id) =>{
  console.log(`item deleted : ${id}`)
}

const handleEdit = (id) =>{
  console.log(`item deleted : ${id}`)
}

  return (
    <>
      {alert.show && <Alert 
        type={alert.type}
        text={alert.text}
        />}
      <h1>Budget Calculator</h1>
      <div className='App'>
        <ExpenseForm 
            charge={charge} 
            amount={amount} 
            handleAmount={handleAmount} 
            handleCharge={handleCharge} 
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            // handleClear={}
        />
        <ExpenseList expenses={expenses} />
      </div>
      <h1>
        Total Spending: 
        <span className='total'>
         $ {expenses.reduce((acc, curr) =>{
           return (acc += parseInt(curr.amount)) //parses string to int
         },0)}
        </span>
      </h1>
    </>
  )
}

export default App
