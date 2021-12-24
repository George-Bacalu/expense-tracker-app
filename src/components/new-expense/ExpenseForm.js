import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  const [userInput, setUserInput] = useState({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  const { enteredTitle, enteredAmount, enteredDate } = userInput;

  const userInputChangeHandler = event => {
    const { id, value } = event.target;
    setUserInput(prevState => ({ ...prevState, [id]: value }));
  };

  const submitHandler = event => {
    event.preventDefault();
    const expenseData = { title: enteredTitle, amount: +enteredAmount, date: new Date(enteredDate) };
    props.onSaveExpenseData(expenseData);
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="enteredTitle">Title</label>
          <input type="text" id="enteredTitle" onChange={userInputChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredAmount">Amount</label>
          <input type="number" id="enteredAmount" min="0.01" step="0.01" onChange={userInputChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredDate">Date</label>
          <input type="date" id="enteredDate" min="2019-01-01" max="2022-12-31" onChange={userInputChangeHandler} value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
