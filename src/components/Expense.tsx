import React from "react";

const Expense = () => {
  return (
    <div>
      <form action="">
        <div className="form-field">
          <label htmlFor="source"> Expense source </label>
          <input type="text" name="source" id="source" required></input>
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Amount of Expense </label>
          <input type="number" name="amount" id="amount" required></input>
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Date of Expense </label>
          <input type="date" name="date" id="date" required></input>
        </div>
        <button> Add Expense </button>
      </form>
    </div>
  );
};

export default Expense;
