import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const App = () => {
  const [expensesList, setExpensesList] = useState([]);

  const addExpenseHandler = expense => setExpensesList(prevExpenses => [expense, ...prevExpenses]);
  const removeExpenseHandler = expenseId => setExpensesList(prevExpenses => prevExpenses.filter(expense => expense.id !== expenseId));

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesList} onRemoveExpense={removeExpenseHandler} />
    </>
  );
};

export default App;
