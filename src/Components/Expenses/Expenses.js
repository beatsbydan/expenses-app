import { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css'
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpenseChart from '../ExpenseChart/ExpenseChart';
const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState("2023")
    const handleFilterChange = (year) => {
        setFilteredYear(year)
    }
    const filteredExpenses = expenses.filter(item=>{
        return item.date.getFullYear().toString() === filteredYear
    })
    
    return (  
        <div className="expenses">
            <ExpensesFilter
             selected={filteredYear}
             changeFilter={handleFilterChange}
             />
             <ExpenseChart expenses={filteredExpenses}/>
             <ExpensesList filteredExpenses={filteredExpenses}/>
        </div>
    );
}
 
export default Expenses;