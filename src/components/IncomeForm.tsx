import React, { ChangeEvent, FormEvent, useState } from "react"; //importing the use state to handle the component's data
import { toast } from "react-toastify";
import styles from "./IncomeForm.module.css";
// import { v4 as uuidv4 } from 'uuid';

type incomeType = {
  // id?: string,
  source: string;
  amount: number;
  date: string;
};

export const IncomeForm = (props: {
  onGetTotalIncomeAmount: (amount: number) => void;
}) => {
  //use state for each input, inComeSource is set
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeDate, setDate] = useState("");
  const [incomes, setIncomes] = useState<incomeType[]>([]); // the array where to push my items

  const totalAmount = incomes.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );

  props.onGetTotalIncomeAmount(totalAmount);

  const handleIncomeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(incomeSource && incomeAmount &&  incomeDate) { 

      const income = {
        // id: uuidv4(),
        source: incomeSource,
        amount: incomeAmount,
        date: incomeDate,
      };
      console.log(income);
      setIncomes((prevIcomes) => {
        return [...prevIcomes, income];
      }); //use spread operator to spread the array items
  
     
  
      // Reset form fields after submission
      setIncomeSource("");
      setIncomeAmount(0);
      setDate("");
  
      
    }
  
    
  };

  const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setIncomeSource(value); //updates the status of the value
  };
  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIncomeAmount(Number(event.target.value)); //converts to number
  };

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleIncomeSubmit}>
        <div className="form-field">
          <label htmlFor="source"> Income source </label>
          <input
            type="text"
            name="source"
            id="source"
            value={incomeSource}
            required
            onChange={handleSourceChange}
          ></input>
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Amount of Income </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={incomeAmount}
            onChange={handleAmountChange}
            required
          ></input>
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Date of Income </label>
          <input
            type="date"
            name="date"
            id="date"
            value={incomeDate}
            onChange={handleDate}
            required
          ></input>
        </div>
        <button> Add Income </button>
      </form>
      {/* List the array items using ul/li */}
      {/* Conditional Rendering */}
      {incomes.length ? (
        <ul>
          {incomes.map((income) => (
            <li>
              {income.source}: {income.amount} EUR on {income.date}
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
