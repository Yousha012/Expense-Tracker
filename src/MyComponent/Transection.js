import React, { useContext } from 'react'
import { GlobalContext  } from '../Context/GlobalState';

export const Transection = ({ transection }) => {
  const { deleteTransection } = useContext(GlobalContext)
    const sign = transection.amount < 0 ? "-" : "+";
  return (
    
    <>
    <li className= {transection.amount < 0 ? 'minus' : 'plus'} >
    {/* <li className={`list-item ${transection.amount < 0 ? 'minus' : 'plus'}`}> */}
    <span className='transaction-text'>  {transection.text}</span> <span className='transaction-amount'>{sign}${Math.abs(transection.amount)}</span>
    
    <button onClick={() => deleteTransection(transection.id)} className='delete-btn' >x</button>
                </li>
                
    </>
  )  
}
