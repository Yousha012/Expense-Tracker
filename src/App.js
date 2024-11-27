import { Balance } from './MyComponent/Balance';
import { Header } from './MyComponent/Header';
import { IncomeExpense } from './MyComponent/IncomeExpense';
import { Transectionlist } from './MyComponent/Transectionlist';
import { AddTransection } from './MyComponent/AddTransection';
import { GlobalProvider } from './Context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
       
      <Header/>


      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <Transectionlist/>
        <AddTransection/>
      </div>
      </div>
      </GlobalProvider>
      
  );
}

export default App;
