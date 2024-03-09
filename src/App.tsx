import React, { useState } from "react";
import logo from "./logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//use toastify to display cool popup msgs, usage: --> toast.success("myMsg");
import "./App.css";
import IncomeForm from "./components/IncomeForm";
import Expense from "./components/Expense";
import Target from "./components/Target";
import Transfer from "./components/Transfer";

function App() {
  //use states to render the components
  const [savingAmount, setSavingAmount] = useState(0);
  const [totalIncomeAmout, setTotalIncomeAmount] = useState(0);
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);

  //functions to each components
  const getSavingAmount = (amount: number) => {
    console.log(amount);
    setSavingAmount(amount);
  };

  // const[transferAmount, setTransferAmount] = useState(0);
  const getTotalIncomeAmount = (amount: number) => {
    setTotalIncomeAmount(amount);
  };
  const getTotalExpenseAmount = (amount: number) => {
    setTotalExpenseAmount(amount);
  };

  return (
    <div className="container">
      <h1> Moe's Budget App </h1>
      <p className="style">
        <IncomeForm onGetTotalIncomeAmount={getTotalIncomeAmount} />
      </p>
      <p className="style">
        {" "}
        <Expense onGetTotalExpenseAmount={getTotalExpenseAmount} />
      </p>
      <p className="style">
        <Target savingAmount={savingAmount} />{" "}
      </p>
      <p className="style">
        {" "}
        <Transfer
          onGetSavingAmount={getSavingAmount}
          totalIncomeAmout={totalIncomeAmout}
          totalExpenseAmount={totalExpenseAmount}
        />
      </p>
      <ToastContainer />
    </div>
  );
}

export default App;
