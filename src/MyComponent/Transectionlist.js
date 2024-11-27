import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Transection } from './Transection';

export const Transectionlist = () => {
  const { transections } = useContext(GlobalContext);

  // console.log(context);



  return (
    <div>
        <div>
            <h3>History</h3>
            <hr/>
            <ul className='list'>
              {transections.map(transection => (<Transection key={transection.id} transection={transection}/>))}
                
            </ul>
        </div>
    </div>
  )
}
