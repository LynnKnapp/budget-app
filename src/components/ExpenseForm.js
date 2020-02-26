import React from 'react'
import { MdSend } from 'react-icons/md'

const ExpenseForm = (props) => {
        const {charge, amount, handleCharge, handleAmount, handleSubmit} = props

        // const [isToggled, setToggled] = useState(false);
  
        // const toggleBtn = () => setToggled(!isToggled);
        

    return (
        <div className='form-cont'>
            <form className= 'form'onSubmit={handleSubmit}>
                <div className='label-group'>
                    <div className='form-center'>
                        <div className='form-group'>  
                        <label html='expense'>charge</label>
                            <input type='text' 
                                className='form-control' 
                                id='charge'
                                name='charge'
                                placeholder='e.g. rent'
                                value={charge}
                                onChange={handleCharge}
                                />
                        </div> 
                        <div className='form-group'> 
                        <label html='expense'>amount</label>
                            <input type='number' 
                                className='form-control' 
                                id='amount'
                                name='amount'
                                placeholder='e.g. 100'
                                value={amount}
                                onChange={handleAmount}
                                />
                        </div>
                    </div>
                </div> 
                <div className='btn-cont'>  
                <button type= 'submit' className='btn' onClick={handleSubmit}>submit
                    <MdSend className='btn-icon' />   
                </button>  
                     {/* { toggleBtn ?
                        <>
                            <button className='btn' onClick={handleSubmit}>submit
                                <MdSend className='btn-icon' />   
                            </button> 
                            </>
                            :
                            <>
                            <button className='btn' onClick={handleSubmit}>edit
                                <MdSend className='btn-icon' /> 
                            </button>
                        </>
                    }   */}
                </div>        
            </form> 
        </div>     
    )
}

export default ExpenseForm
