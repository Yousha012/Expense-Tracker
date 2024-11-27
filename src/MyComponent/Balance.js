import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Balance = () => {
  const {transections } = useContext(GlobalContext);
  const amounts = transections.map(transection => transection.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  // console.log(total)

  return (
    <>
    <h4>Balance</h4>
    <h1>${total}</h1>
    </>
  )
}
