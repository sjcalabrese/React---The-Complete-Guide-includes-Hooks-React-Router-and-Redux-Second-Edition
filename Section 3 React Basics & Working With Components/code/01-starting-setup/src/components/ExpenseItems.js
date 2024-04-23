import "./ExpenseItem.css";

function ExpenseItem(props) {
//const expenseDate= new Date(2023, 2, 28);
const month = props.date.toLocaleString('en-US', {month: 'long'});
const day = props.date.toLocaleString('en-US', {day: '2-digit'});
const year = props.date.getFullYear();
//! Date allows you to create a date object
const expenseTitle = 'Car Insurance'; 
const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
        </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
