import React, { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
type expenseType = {
  id: string,
  source: string;
  amount: number;
  date: string;
};
type totalExpenseAmountProps = {
  onGetTotalExpenseAmount: (amount: number) => void;
};

export const Expense = (props: totalExpenseAmountProps) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [expenses, setExpense] = useState<expenseType[]>([]);

  const totalAmount = expenses.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );
  props.onGetTotalExpenseAmount(amount);

  const handleExpenseChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSource(e.target.value);
  };
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleDelete = (index: number) => {
    // Create a copy of the expenses array
    const updatedExpenses = [...expenses];
    // Remove the expense item at the specified index
    updatedExpenses.splice(index, 1);
    // Update the state with the modified expenses array
    setExpense(updatedExpenses);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const expense = {
      source: source,
      amount: amount,
      date: date,
    };

    if (source && amount && date) {
      const expense = {
        id: uuidv4(),
        source: source,
        amount: amount,
        date: date,
      };
      setExpense((prevExpense) => [...prevExpense, expense]);
      toast.success("New Expense Added");
      props.onGetTotalExpenseAmount(totalAmount);
    } else toast.error("Date is missing");

    // Reset form fields after submission
    setSource("");
    setAmount(0);
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source"> Expense source </label>
          <input
            type="text"
            name="source"
            id="source"
            value={source}
            required
            onChange={handleExpenseChange}
          ></input>
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Amount of Expense </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            required
            onChange={handleAmountChange}
          ></input>
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Date of Expense </label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            required
            onChange={handleDateChange}
          ></input>
        </div>
        <button> Add Expense </button>
      </form>
      <ul>
  {expenses.map((expense) => (
    <li key={expense.id}>
      {expense.source}: {expense.amount} EUR, on {expense.date}{" "}
      <button onClick={() => handleDelete(parseInt(expense.id))}> Delete </button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Expense;
