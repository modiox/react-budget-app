import React from "react";
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
  return (
    <div className="container">
      <IncomeForm />
      <Expense />
      <Target />
      <Transfer />
      <ToastContainer />
    </div>
  );
}

export default App;
