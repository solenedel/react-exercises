import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import Timer from "./components/Timer";


// unique local storage key 
// const LOCAL_STORAGE_KEY_NUMBERS = 'numbersFromUser';

function App() {

  // number entered by user in the input fields
   const [numbers, setNumbers] = useState({
     number1: 0, 
     number2: 0
   });

   const [time, setTime] = useState(0);
   const [timerOn, setTimerOn] = useState(false);


   useEffect(() => {
     let interval = null; // declare the interval

     if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1000); // add one second to the time
      }, 1000);

     } else {
        clearInterval(interval); // stop the timer
     }

     // return cleanup function to avoid memory leaks when component unmounts
     return () => clearInterval(interval); 
   }, [timerOn]);


  return (
    <div className="App">
      <GlobalStyles />
      <Form 
        numbers={numbers}
        setNumbers={setNumbers}
        time={time}
        setTime={setTime}
      />
      <div className="chosen-numbers">
        <h3>Numbers selected by user:</h3>
        <ul>
          <li>Number 1: {numbers.number1}</li>
          <li>Number 2: {numbers.number2}</li>
        </ul>
      </div>
      <div>
      <Timer time={time} setTime={setTime} timerOn={timerOn} setTimerOn={setTimerOn} numbers={numbers} />
      </div>
    </div>
  );
}

export default App;
