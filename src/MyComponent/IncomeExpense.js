import React, { useContext } from 'react'
import { GlobalContext  } from '../Context/GlobalState'

export const IncomeExpense = () => {
  const { transections } = useContext(GlobalContext);
  const amounts = transections.map(transection => transection.amount);



  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);



  const expense = (
    amounts.filter(item => item <= 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2)


  return (
    <div className='inc-ex-container'>
        <div>
            <h4>Income</h4>
            <p style={{color:'lightgreen'}}>{income}</p>
        </div>
        <hr/>.
        <div>
        <h4>Expenses</h4>
            <p style={{color:'red'}}>{expense}</p>
        </div>
    </div>
  )
}
