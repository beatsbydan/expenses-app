import './ExpensesFilter.css'
const ExpensesFilter = ({selected,changeFilter }) => {
    const handleDropDownChange = (e) => {
        changeFilter(e.target.value)
    }
    return ( 
        <div className="expensesFilter">
            <div className="expensesFilter__control">
                <label htmlFor="">Filter by year</label>
                <select name="" id="" value={selected} onChange={handleDropDownChange}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
     );
}
 
export default ExpensesFilter;