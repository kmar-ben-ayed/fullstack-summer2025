import './StopWatch.css';
import React , { useState, useEffect, useRef } from 'react';


function StopWatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const StartTimeRef = useRef(0);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current= setInterval(()=> {
                setElapsedTime(Date.now() - StartTimeRef.current)
            },10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        };
    },[isRunning]);

    function handleStart() {
        if (!isRunning) {
            setIsRunning(true);
            StartTimeRef.current = Date.now() - elapsedTime;
            
        }
    }

    function handleStop() {
        if (isRunning) {
            setIsRunning(false);

        }
    }
    function handleReset() {
        setIsRunning(false);
        setElapsedTime(0);
    }

    function formatTime() {
        let h=Math.floor(elapsedTime /(1000* 60 * 60));
        let mins=Math.floor(((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)) % 60);
        let secs=Math.floor((((elapsedTime % (1000 * 60 * 60)) % (1000 * 60)) /1000) % 60);
        let milliseconds=Math.floor((elapsedTime % 1000) / 10);
        h = h < 10 ? `0${h}` : h;
        mins = mins < 10 ? `0${mins}` : mins;
        secs = secs < 10 ? `0${secs}` : secs;
        milliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
        return `${mins}:${secs}:${milliseconds}`;

    };
    return (
        <div className="stopwatch">
            <div className="stopwatch-timer">
                <h1>{formatTime()}</h1>
            </div>
            <div className="stopwatch-controls">
                <button type="button" class="btn btn-success"  onClick={() => handleStart()}>Start</button>
                <button type="button" class="btn btn-danger" onClick={() => handleStop()}>Stop</button>
                <button type="button" class="btn btn-primary" onClick={() => handleReset()}>Reset</button>
            </div>
        </div> 
    );

}
export default StopWatch;