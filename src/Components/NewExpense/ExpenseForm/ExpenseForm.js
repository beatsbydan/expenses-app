import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = ({onSave, onCancel}) => {
    const [entries, setEntries] = useState({
        title:"",
        amount:"",
        date:""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setEntries({...entries, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const expenseData = {
            title: entries.title,
            amount: entries.amount,
            date: new Date(entries.date)
        }
        setEntries({
            title:"",
            amount:"",
            date:""
        })
        onSave(expenseData);
    }
    return ( 
        <form action="" className="expenseForm" onSubmit={handleSubmit}>
            <div className="newExpense__controls">
                <div className="newExpense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" name = "title" onChange={handleChange} value={entries.title} />
                </div>
                <div className="newExpense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" name = "amount" min="0.01" step="0.01" onChange={handleChange} value={entries.amount}/>
                </div>
                <div className="newExpense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" name='date' max="2023-12-31" onChange={handleChange} value={entries.date} />
                </div>
            </div>
            <div className="newExpense__actions">
                <button type='button' onClick={onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
     );
}
 
export default ExpenseForm;