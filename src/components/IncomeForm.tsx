import React from "react";
import { toast } from 'react-toastify';

const IncomeForm = () => {
  return (
    <div>
      <form action="">
        <div className="form-field">
          <label htmlFor="source"> Income source </label>
          <input type="text" name="source" id="source" required></input>
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Amount of Income </label>
          <input type="number" name="amount" id="amount" required></input>
        </div>
        <div className="form-field">
          <label htmlFor="amount"> Date of Income </label>
          <input type="date" name="date" id="date" required></input>
        </div>
        <button> Add Income </button>
      </form>
    </div>
  );
};

export default IncomeForm;
