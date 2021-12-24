import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = event => props.onFilterChange(event.target.value);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year">Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.selected}>
          <option id="year" value="2022">2022</option>
          <option id="year" value="2021">2021</option>
          <option id="year" value="2020">2020</option>
          <option id="year" value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
