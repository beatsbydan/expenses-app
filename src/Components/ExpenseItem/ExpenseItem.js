import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem = ({title, amount, date}) => {
    return ( 
        <li className="expenseItem">
            <ExpenseDate date={date}/>
            <div className="expenseItemDescription">
                <h2>{title}</h2>
                <div className="expenseItemPrice">${amount}</div>
            </div>
        </li>
     );
}
 
export default ExpenseItem;
// .toISOString()converts objects to strings for dates.
//  props stand for properties
// .toLocaleString() output dates in readab;e format. takes two parameters, language as a string and object that detectsnhow the date should be formatted
