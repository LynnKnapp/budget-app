import React from 'react'
import Expense from './Expense'
import {MdDelete} from 'react-icons/md'


const ExpenseList = (expenses) => {
    return (
        <>
            <ul className='list'>
            {expenses.map((expense) =>{
             return <Expense key={expense.id} expense={expense} />  
            })}
            </ul> 
            {expenses.length > 0 && <button className='btn'>
                Clear Expenses
                <MdDelete className='btn-icon' />   
            </button>}

        </>
    )
}

export default ExpenseList
