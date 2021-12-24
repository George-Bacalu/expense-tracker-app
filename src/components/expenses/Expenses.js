import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../ui/Card";
import "./Expenses.css";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = selectedYear => setFilteredYear(selectedYear);
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} onRemove={props.onRemoveExpense} />
    </Card>
  );
};

export default Expenses;
