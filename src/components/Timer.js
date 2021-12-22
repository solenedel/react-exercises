import React, {useEffect} from "react";

const Timer = ({ minutes, setMinutes, seconds, setSeconds}) => {


  // useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log('This will run every second!');
  //       setMinutes(minutes => minutes - 1);
  //       console.log('MINUTES!!!', minutes);
  //     }, 1000);

  //     return () => clearInterval(interval);
     
  //   }, []);
  
    /*
  const startTimer = () => {
    console.log('timer started!');

    // let interval = setInterval(() => {
    //   clearInterval(interval);
    //   console.log('MINUTES ', minutes);
    //   if (minutes !== 0) setMinutes(minutes - 1);

    //   if (minutes === 0) {
    //     console.log('minutes has reached zero');
    //   }

    // }, 1000);
    
  }; */

  return ( 
    <div className="timer">
      <h3>timer</h3>
      <div>{minutes} : {seconds}</div>
      <button>Start</button>
    </div>
   );
}
 
export default Timer;