import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";

// unique local storage key to store the todos
const LOCAL_STORAGE_KEY_NUMBERS = 'numbersFromUser';

function App() {

  // number entered by user in the input fields
   const [numbers, setNumbers] = useState({
     number1: 0, 
     number2: 0
   });

   // persist numbers state on reload
   useEffect(() => {
     const storageNumbers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NUMBERS));
     if (storageNumbers) setNumbers(storageNumbers);
   }, []);

   // save numbers to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_NUMBERS, JSON.stringify(numbers));
  }, [numbers]);

  return (
    <div className="App">
      <GlobalStyles />
      <Form 
        numbers={numbers}
        setNumbers={setNumbers}
      />
      <div className="chosen-numbers">
        <h3>Numbers selected by user:</h3>
        <ul>
          <li>Number 1: {numbers.number1}</li>
          <li>Number 2: {numbers.number2}</li>
        </ul>
        
        
      </div>
    </div>
  );
}

export default App;
