import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css'
const ExpensesList = ({filteredExpenses}) => {
    if(filteredExpenses.length === 0){
        return <h2 className='expensesList__fallback'>Found no expenses</h2>
    }
    return ( 
        <ul className='expensesList'>
            {filteredExpenses.map((expense)=>{
                return(
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                )
            })}
        </ul>
     );
}
 
export default ExpensesList;