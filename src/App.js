import React, {useState} from 'react'
import './styles/styles.css'
import Alert from './components/Alert'
import ExpenseList from'./components/ExpenseList.js'
import ExpenseForm from'./components/ExpenseForm.js'
import './styles/styles.css'
import uuid from 'uuid/v4'


const initialExpenses = localStorage.getItem('expenses')? 
  JSON.parse(localStorage.getItem('expenses')) : []

function App () {
  
  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show:false})
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)
  

  const handleCharge = e =>{
    setCharge(e.target.value)
  }

  const handleAmount = e =>{
    const amount = e.target.value
      if(amount === ''){
        setAmount(amount)
      }else{
        setAmount(parseInt(amount))
      }
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
       if(edit){
        const tempExpenses = expenses.map(expense =>{
           return expense.id === id?{...expense,charge,amount} :expense
        }) 
        setExpenses(tempExpenses)
       }else{
         const singleExpense = {id:uuid(),charge,amount}
         setExpenses([...expenses,singleExpense])
         handleAlert({type: 'success', text: 'item added'})

       }
      setCharge('')
      setAmount('')
    }else{
      handleAlert({type: 'danger', text: "can't be an empty value & amount must be larger than 0"})
    }
  }
  

const clearItems = () =>{
  
  setExpenses([])
}

const handleDelete = id => {
  let filteredExpenses = expenses.filter(expense => expense.id !== id);
  setExpenses(filteredExpenses);
  handleAlert({ type: "danger", text: "item deleted" });
}


const handleEdit = id =>{
   const expenseItem = expenses.find(item => item.id === id)
   const {charge, amount} = expenseItem
   setCharge(charge)
   setAmount(amount)
   setEdit(true)
   setId(id)
  console.log(expenseItem)
}

  return (
    <div className= 'app-cont'>
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
            edit={edit}
            
        />
        <ExpenseList 
            expenses={expenses} 
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
            />
      </div>
      <h1 className='total-spending'>
        Total Spent: 
        <span className='total'>
         $ {expenses.reduce((acc, curr) =>{
           return (acc += parseInt(curr.amount)) //parses string to int
         },0)}
        </span>
      </h1>
    </div>
  )
}

export default App
