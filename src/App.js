import React, { useState } from "react";
import Form from "./components/Form";

function App() {

  // number entered by user in the input fields
   const [numbers, setNumbers] = useState({
     number1: 0, 
     number2: 0
   });

  return (
    <div className="App">
      <Form 
        numbers={numbers}
        setNumbers={setNumbers}
      />
      <div>
        Number 1: {numbers.number1}
        <br />
        Number 2: {numbers.number2}
      </div>
    </div>
  );
}

export default App;
