import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import IncomeForm from "./components/IncomeForm";
import Expense from "./components/Expense";
import Target from "./components/Target";
import Transfer from "./components/Transfer";

function App() {
  const [savingAmount, setSavingAmount] = useState(0);
  const [totalIncomeAmout, setTotalIncomeAmount] = useState(0);
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);

  const getSavingAmount = (amount: number) => {
    setSavingAmount(amount);
  };

  const getTotalIncomeAmount = (amount: number) => {
    setTotalIncomeAmount(amount);
  };

  const getTotalExpenseAmount = (amount: number) => {
    setTotalExpenseAmount(amount);
  };

  return (
    <div>
      <div className="budget-title">
        {" "}
        <h1> Moe's Budget App </h1>{" "}
      </div>
      <div className="container">
        <div className="style">
          <IncomeForm onGetTotalIncomeAmount={getTotalIncomeAmount} />
        </div>
        <div className="style">
          <Expense onGetTotalExpenseAmount={getTotalExpenseAmount} />
        </div>
        <div className="style">
          <Target savingAmount={savingAmount} />{" "}
        </div>
        <div className="style">
          <Transfer
            onGetSavingAmount={getSavingAmount}
            totalIncomeAmout={totalIncomeAmout}
            totalExpenseAmount={totalExpenseAmount}
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
