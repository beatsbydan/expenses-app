import { useState } from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css'
const NewExpense = ({onAdd}) => {
    const [isOpen, setIsOpen] = useState(false)
    const saveExpense = (data) => {
        const savedData = {
            ...data,
            id: Math.random().toString()
        }
        onAdd(savedData)
    }
    const handleOpening = () => {
        setIsOpen(true)
    }
    const handleClosing = () => {
        setIsOpen(false)
    }
    return ( 
        <div className="newExpense">
            {!isOpen&& <button onClick={handleOpening}>Add New Expense</button>}
            {isOpen&&<ExpenseForm
             onSave = {saveExpense}
             onCancel={handleClosing}
             />}
        </div>
     );
}
 
export default NewExpense;
//Props can only be passed from parent to child
