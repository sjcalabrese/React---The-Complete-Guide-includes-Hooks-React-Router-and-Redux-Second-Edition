
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 9412,
      date: new Date(2023, 3, 28),
    },
    { id: "e2", title: "New TV", amount: 799.99, date: new Date(2023, 4, 28) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    { id: "e4", title: "New Desk", amount: 450.0, date: new Date(2023, 1, 28) },
  ];
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
