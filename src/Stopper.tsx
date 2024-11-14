import { clear } from 'console';
import React, { useEffect, useRef, useState } from 'react';
import { setInterval } from 'timers/promises';

const Stopper: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState(true);
  const timer: any = useRef();

  // useEffect(() => {
  //   if (running)
  //     timer.current = setInterval(() => {
  //       setTime((pre) => pre + 1);
  //     }, 1000);
  //   return () => clearInterval(timer.current);
  // }, [running]);

  const format = (time: number) => {
    let hours: any = Math.floor((time / 60 / 60) % 24);
    let minutes: any = Math.floor((time / 60) % 60);
    let seconds: any = Math.floor((time / 60) % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
  };

  return (
    <div className="stopwatch">
      <p className="timer">{format(time)}</p>
      <div className="actions">
        <button onClick={() => setTime(0)}>Restart</button>
        <button
          onClick={() => {
            if (running) clearInterval(timer.current);
            setRunning(!running);
          }}
        >
          {running ? 'stop' : 'resume'}
        </button>
        <button className="resumebtn border-2" onClick={() => setTime(timer)}></button>;
      </div>
    </div>
  );

  // useEffect(() => {
  //   timeInit();
  //   return () => clearInterval(timeHandler.current);
  // });

  // const timeHandler: any = useRef();
  // //   const resume = () => {
  // //     timeHandler.current = setInterval(() => {
  // //       setTime(time);
  // //     });
  // //   };

  // const timeInit = () => {
  //   timeHandler.current = setInterval(() => {
  //     setTime((prevTime) => prevTime + 1);
  //   }, 1000);
  // };

  // return (
  //   <>
  //     <h1>{time}</h1>

  //     <button onClick={() => setTime(0)} className="btn button-info border-2">
  //       {' '}
  //       Restart
  //     </button>
  //     <button onClick={() => clearInterval(timeHandler.current)} className="btn button-danger border-2">
  //       {' '}
  //       Pause{' '}
  //     </button>
  {
    /* <button onClick={() => resume} className="btn button-resume border-2">
        Resume{' '}
      </button> */
  }
  //   </>
  // );
};

export default Stopper;
