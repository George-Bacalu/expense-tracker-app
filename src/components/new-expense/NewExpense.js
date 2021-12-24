import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const finalExpenseData = { ...enteredExpenseData, id: Math.floor(Math.random() * 100000).toString() };
    props.onAddExpense(finalExpenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
