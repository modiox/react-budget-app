import React, { FormEvent, useState } from "react";

type Source = {
  type: string;
  amount: number;
};

export const Target = (props: { savingAmount: number }) => {
  // State for storing income and expense sources
  const [sources, setSources] = useState<Source[]>([]);
  const [targetInput, setTargetInput] = useState("");

  // Function to handle adding income
  const handleAddIncome = (event: FormEvent) => {
    event.preventDefault();
    const targetValue = parseFloat(targetInput);
    if (!isNaN(targetValue)) {
      setSources([...sources, { type: "income", amount: targetValue }]);
      setTargetInput("");
    }
  };
  // Calculate total saving
  const totalSaving = sources.reduce((acc, source) => acc + source.amount, 0);

  // Calculate percentage
  const percentage = ((totalSaving / props.savingAmount) * 100).toFixed(2);

  const handleDelete = (index: number) => {
    const newSources = [...sources];
    newSources.splice(index, 1);
    setSources(newSources);
  };

  return (
    <div>
      <form action="">
        <div className="form-field">
          <label htmlFor="source"> Set Target </label>
          <input
            type="text"
            name="source"
            id="source"
            value={targetInput}
            onChange={(e) => setTargetInput(e.target.value)}
            required
          ></input>
          <button> Add Income </button>
        </div>
      </form>
      <p> Current Saving: 0 </p>
      <p> Target: {props.savingAmount}</p>
      <p>
        {" "}
        <progress max={5000} value={1000}>
          {" "}
        </progress>
      </p>

      <p> Current Saving: ${totalSaving} </p>
      <p> Target: ${props.savingAmount}</p>
      <p> Percentage of Target: {percentage}% </p>
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
