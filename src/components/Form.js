import React from "react";

const Form = ({numbers, setNumbers, setTime, time}) => {

  const handleInputChange1 = (e) => {
    setNumbers((prev) => ({ ...prev, number1: Number(e.target.value) }));
  };

  const handleInputChange2 = (e) => {
    setNumbers((prev) => ({ ...prev, number2: Number(e.target.value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if ()
    setTime(numbers.number1 * 1000 * 60);
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