import React from "react";

const Timer = ({ minutes, setMinutes, seconds, setSeconds}) => {
  return ( 
    <div className="timer">
      <h3>timer</h3>
      <div>{minutes} : {seconds}</div>
      <button>Start</button>
    </div>
   );
}
 
export default Timer;