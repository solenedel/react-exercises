import React, { useState } from "react";

const Form = ({number1, setNumber1, number2, setNumber2,}) => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setNumber1(e.target.value);
  // }

  return ( 
  <div className="form">
    <label>Enter first number</label>
    <input type="number" />
    <label>Enter second number</label>
    <input type="number" />
    <button type="submit">Confirm</button>
  </div> );
}
 
export default Form;