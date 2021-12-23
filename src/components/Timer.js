import React from "react";
const Timer = ({ time, setTime, timerOn, setTimerOn, numbers }) => {


  return ( 
    <div className="timer">
      <span id="minutes">{('0' + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
      <span id="seconds">{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span> 

      <div className="buttons">
        
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>)}
        {timerOn && (<button onClick={() => setTimerOn(false)}>Stop</button>)}  
        {!timerOn && time !== 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
        {!timerOn && time > 0 && ( 
           <button onClick={() => {
          setTimerOn(false);
          setTime(0);
        }}>Reset</button>
        )}
       
      </div>
    </div>
   );
}
 
export default Timer;
