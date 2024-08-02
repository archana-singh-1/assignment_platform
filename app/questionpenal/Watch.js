"use client"
import React, { useEffect, useState } from 'react';
import './Watch.css';

function Watch() {

    const [timeLeft, setTimeLeft] = useState(59 * 60 + 59); 
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 59 * 60 + 59)); 
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="watch">
            <div className="circle">
                <div className="circle_1">
                    <div className="time">
                        <div className="time-section">
                            {minutes}
                            <span>min</span>
                        </div>
                        <h3>:</h3>
                        <div className="time-section">
                            {seconds < 10 ? `0${seconds}` : seconds}
                            <span>sec</span>
                        </div>
                    </div>
                </div>
            </div>
            <p>Remaning Time</p>
        </div>
    );
}

export default Watch;
