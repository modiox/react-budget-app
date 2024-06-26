import { useEffect, useState } from "react"; //importing the use state to handle the component's data
import {useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

type IncomeType = {
  id: string;
  source: string;
  amount: number;
  date: string;
};

export const IncomeForm = (props: {
  onGetTotalIncomeAmount: (amount: number) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IncomeType>();
  const notify = () => toast("Income added successfully!");

  const [incomes, setIncomes] = useState<IncomeType[]>([]); // the array where to push my items

  const totalAmount = incomes.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );
  // useEffect
  useEffect(() => {
    props.onGetTotalIncomeAmount(totalAmount);
  }, [incomes, totalAmount, props]);

  const handleIncomeSubmit = (data: IncomeType) => {
    if (data.source && data.amount && data.date) {
      const income = {
        id: uuidv4(),
        source: data.source,
        amount: data.amount,
        date: data.date,
      };
      console.log(income);
      setIncomes((prevIncomes) => [...prevIncomes, income]);
      toast.success("New Expense Added");
      notify();
      reset();
    } else {
      toast.error("Please fill in all fields.");
    }
  };
  const handleDelete = (id: string) => {
    const updatedIncomes = incomes.filter((income) => income.id !== id);
    setIncomes(updatedIncomes);
    toast.error("Expense Deleted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleIncomeSubmit)}>
        <div className="form-field">
          <label htmlFor="source"> Income source </label>
          <input
            type="text"
            placeholder="i.e salary.."
            required
            id="income-source"
            {...register("source", { required: "Enter income source" })}
          />
          {errors.source && <span>{errors.source.message}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Amount of Income </label>
          <input
            type="number"
            id="income-amount"
            {...register("amount", {
              valueAsNumber: true,
              required: "Enter income amount",
              min: { value: 0, message: "Enter valid amount" },
            })}
          >
            {errors.amount && <span>{errors.amount.message}</span>}
          </input>
        </div>
        <div className="form-field">
          <label htmlFor="date"> Date of Income </label>
          <input
            type="date"
            {...register("date", { required: "Enter income date" })}
            id="income-date"
          >

            {errors.date && <span>{errors.date.message}</span>}
          </input>
        </div>
        <button> Add Income </button>
      </form>
      {/* List the array items using ul/li */}
      {/* Conditional Rendering */}
      {incomes.length ? (
        <ul>
          {incomes.map((income) => (
            <li key={income.id}>
              {income.source}: {income.amount} EUR on {income.date}
              <button onClick={() => handleDelete(income.id)}> Delete </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No income Source</p>
      )}
    </div>
  );
};

export default IncomeForm;
