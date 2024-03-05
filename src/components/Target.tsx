import React from 'react'; 


const Target = () => {
  return (
    <div>
      <form action="">
        <div className="form-field">
          <label htmlFor="source"> Set Target </label>
          <input type="text" name="source" id="source" required></input>
          <button> Add Income </button>
        </div>
      </form>
      <p> Current Saving: 0 </p>
      <p> Target: 0</p>
      <p> <progress max={5000} value={1000}> </progress></p>
    </div>
  );
};

export default Target;
