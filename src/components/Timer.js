import React from "react";

const Timer = ({ minutes, setMinutes, seconds, setSeconds}) => {

  const startTimer = () => {
    console.log('timer started!');

    const intervalFunc = () => {
      setMinutes(minutes - 1);
      console.log('MINUTES ', minutes);

       if (minutes === 0) {
      console.log('minutes has reached zero');
    }
    };

    const intervalId = setInterval(intervalFunc, 1000);
    clearInterval(intervalId);
  };

  return ( 
    <div className="timer">
      <h3>timer</h3>
      <div>{minutes} : {seconds}</div>
      <button onClick={() => startTimer()}>Start</button>
    </div>
   );
}
 
export default Timer;