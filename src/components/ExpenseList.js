import React from 'react'
import Expense from './Expense'
import {MdDelete} from 'react-icons/md'


const ExpenseList = (props) => {
    const {expenses, handleEdit, handleDelete, clearItems} = props
    
    const mappedExpenses = expenses.map((expense) =>{
        return <Expense 
        key={expense.id}
        expense={expense}
        handleDelete={handleDelete} 
        handleEdit={handleEdit}

        />
    })
    return (
        <div className='list-cont'>
          <ul className='list'> 
            {mappedExpenses}
           </ul>   
           {expenses.length > 0 && (
                <button className="btn" onClick={clearItems}>
                clear expenses
                <MdDelete className="btn-icon" />
            </button>
           )}   

        </div>
    )
}

export default ExpenseList