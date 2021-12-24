import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  const removeExpenseHandler = () => props.onRemove(props.id);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
        <div className="expense-item__actions">
          <button onClick={removeExpenseHandler}>Remove Expense</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
