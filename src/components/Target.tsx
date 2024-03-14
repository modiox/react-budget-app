import React, { FormEvent, useState, useMemo } from "react";

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
    return ((totalSaving / props.savingAmount) * 100).toFixed(2);
  }, [totalSaving, props.savingAmount]);

  return (
    <div>
      <form onSubmit={handleAddIncome}>
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
          <button> Add </button>
        </div>
      </form>
      <p> Current Saving: {props.savingAmount} </p>
      <p> Target: ${totalSaving}</p>

      <p>
        {" "}
        <progress max={props.savingAmount} value={totalSaving}>
          {" "}
        </progress>
      </p>
      <p> Percentage: {percentage}% </p>
      <ul>
        {sources.map((source, index) => (
          <li key={index}>
            {source.type === "income" ? "Income" : "Expense"}: ${source.amount}
            {/* //delete button to remove the set target */}
            <button onClick={() => handleDelete(index)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Target;
