import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";


type TransferForSavingProps = {
  onGetSavingAmount: (amount: number) => void;
  totalIncomeAmout: number;
  totalExpenseAmount: number;
  
};

export const Transfer = (props: TransferForSavingProps) => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
    setError("");
  }, []);

  const handleSumbit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (amount <= 0) {
      setError("Please enter a valid positive number");
      return;
    }
    props.onGetSavingAmount(amount);
  }, [amount, props]);

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div className="form-field">
          <h2>
            {" "}
            Current Balance: {props.totalIncomeAmout - props.totalExpenseAmount}
          </h2>
          <label htmlFor="source"> Transfer To Saving Account</label>
          <input
            type="text"
            name="source"
            id="source"
            onChange={handleAmountChange}
            required
          ></input>
        </div>
        <button> Transfer </button>
      </form>
    </div>
  );
};

export default Transfer;
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

