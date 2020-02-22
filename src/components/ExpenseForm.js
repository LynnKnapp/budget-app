import React from 'react'
import { MdSend } from 'react-icons/md'

export const ExpenseForm = () => {
    return (
         <form>
            <div className='form-center'>
            <div className='form-group'>  
              <label html='expense'>charge</label>
                <input type='text' 
                       className='form-control' 
                       id='charge'
                       name='charge'
                       placeholder='e.g. rent'
                    />
            </div>
            </div>  
            <div className='form-group'>
            <div className='amount'>  
              <label html='expense'>amount</label>
                <input type='text' 
                       className='form-control' 
                       id='amount'
                       name='amount'
                       placeholder='e.g. 100'
                    />
            </div>
            </div>
            <button 
                type='submit' 
                className='btn'>submit
                 <MdSend className='btn-icon' /></button>            
        </form>   
            
        
    )
}

export default ExpenseForm
