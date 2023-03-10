import { useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
]

function App() {
  const [expenses,setExpenses] = useState(initialExpenses)
  const addExpense = (expense) => {
    setExpenses((prevExpenses=>{
      return [expense, ...prevExpenses]
    }))
  }
  return (
    <div className="App">
      <NewExpense onAdd={addExpense}/>
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
//LIFTING STATE UP: Moving data from child to parent components to either use it there or pass to a different component via props. It basically means passing data up to the highest component in the component tree such that such a component has both access to the component that generates such data and the component that needs such data.
