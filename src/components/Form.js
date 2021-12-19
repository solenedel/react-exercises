import React from "react";

const Form = ({numbers, setNumbers}) => {

  const handleInputChange1 = (e) => {
    setNumbers((prev) => ({ ...prev, number1: Number(e.target.value) }));
  };

  const handleInputChange2 = (e) => {
    setNumbers((prev) => ({ ...prev, number2: Number(e.target.value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('numbers', numbers);
  }

  return ( 
  <div className="form">
    <label>Enter first number</label>
    <input type="number" onChange={handleInputChange1}/>
    <label>Enter second number</label>
    <input type="number" onChange={handleInputChange2}/>
    <button type="submit" onClick={handleSubmit}>Confirm</button>
  </div> );
}
 
export default Form;