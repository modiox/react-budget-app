import React, { FormEvent, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Source = {
  type: string;
  amount: number;
};

export const Target = (props: { savingAmount: number }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Source>();
  const notify = () => toast("Income added successfully!");
  // State for storing income and expense sources
  const [sources, setSources] = useState<Source[]>([]);
  const [targetInput, setTargetInput] = useState("");

  // Function to handle adding income
  const handleAddIncome = (data: Source) => {
    const targetValue = parseFloat(targetInput);
    if (!isNaN(targetValue)) {
      setSources([...sources, { type: "income", amount: targetValue }]);
      notify();
      reset();
    }
  };

  // Calculate total saving
  const totalSaving = useMemo(() => {
    return sources.reduce((acc, source) => acc + source.amount, 0);
  }, [sources]);

  const handleDelete = (index: number) => {
    const newSources = [...sources];
    newSources.splice(index, 1);
    setSources(newSources);
  };

  // Calculate percentage
  const percentage = useMemo(() => {
    if (props.savingAmount === 0) {
      return 0; 
    }
    return ((totalSaving / props.savingAmount) * 100).toFixed(2);
  }, [totalSaving, props.savingAmount]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleAddIncome)}>
        <div className="form-field">
          <label htmlFor="source"> Set Target </label>
          <input
            type="number" 
            id="source"
            {...register("amount", { required: true })}
          ></input>
          {errors.amount && <span>This field is required</span>} 
          <button> Add </button>
        </div>
      </form>
      <p> Current Saving: {`props.savingAmount`} </p>
      <p> Target: ${`totalSaving`}</p>

      <p>
  Progress: {percentage}%
  <progress max={100} value={percentage}></progress>
</p>
      <ul>
        {sources.map((source, index) => (
          <li key={index}>
            {source.type === "income" ? "Income" : "Expense"}: ${source.amount}
            <button onClick={() => handleDelete(index)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Target;
