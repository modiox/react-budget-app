import React, { ChangeEvent, FormEvent, useState } from "react";

type TransferForSavingProps = {
    onGetSavingAmount: (amount: number) => void;
    totalIncomeAmout: number;
    totalExpenseAmount: number;
};


export const Transfer = (props: TransferForSavingProps ) => {

  const [amount, setAmount] = useState(0); 

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));

  };

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    console.log();
    props.onGetSavingAmount(amount);
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div className="form-field">
          <h2> Current Balance: {props.totalIncomeAmout - props.totalExpenseAmount}</h2>
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
function onGetSavingAmount(amount: number) {
    throw new Error("Function not implemented.");
}

