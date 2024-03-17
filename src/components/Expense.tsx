import  {  useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

type ExpenseType = {
  id: string;
  source: string;
  amount: number;
  date: string;
};

type TotalExpenseAmountProps = {
  onGetTotalExpenseAmount: (amount: number) => void;
};

export const Expense = (props: TotalExpenseAmountProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseType>();
  const notify = () => toast("Income added successfully!");
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  // Update total expense amount whenever expenses array changes
  useEffect(() => {
    const totalAmount = expenses.reduce((total, currentValue) => total + currentValue.amount, 0);
    props.onGetTotalExpenseAmount(totalAmount);
  }, [expenses]);

  const handleDelete = (id: string) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    toast.error("Expense Deleted");
  };

  const handleExpenseSubmit = (data: ExpenseType) => {
    if (!data.source || !data.amount || !data.date) {
      toast.error("Please fill in all fields");
      return;
    }

    const newExpense: ExpenseType = {
      id: uuidv4(),
      source: data.source,
      amount: data.amount,
      date: data.date,
    };

    setExpenses([...expenses, newExpense]);
    toast.success("New Expense Added");
    notify();
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleExpenseSubmit)}>
        <div className="form-field">
          <label htmlFor="source"> Expense source </label>
          <input
            type="text"
            id="source"
            {...register("source", { required: "Enter expense source" })}
          />
          {errors.source && <span>{errors.source.message}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Amount of Expense </label>
          <input
            type="number"
            id="amount"
            {...register("amount", {
              valueAsNumber: true,
              required: "Enter expense amount",
              min: { value: 0, message: "Enter valid amount" },
            })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="date"> Date of Expense </label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Enter income date" })}
          />
        </div>
        <button> Add Expense </button>
      </form>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.source}: {expense.amount} EUR, on {expense.date}{" "}
            <button onClick={() => handleDelete(expense.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expense;
