import React from 'react'
import Expense from './Expense'
import {MdDelete} from 'react-icons/md'


const ExpenseList = (props) => {
    console.log(props.expenses)
    const mappedExpenses = props.expenses.map((expense) =>{
        return <Expense key={expense.id} expense={expense} />
    })
    return (
        <>
          <ul> 
            {mappedExpenses}
           </ul>     
            {props.expenses.length > 0 && <button className='btn'>
                Clear Expenses
                <MdDelete className='btn-icon' />   
            </button>}

        </>
    )
}

export default ExpenseList