import React from "react";

const Transfer = () => {
  return (
    <div>
      <form action="">
        <div className="form-field">
            <p> Current Balance</p>
          <label htmlFor="source"> Transfer To Saving Account</label>
          <input type="text" name="source" id="source" required></input>
        </div>
        <button> Transfer </button>
      </form>
    </div>
  );
};

export default Transfer;
