"use client"
import React, { useEffect, useState } from 'react';
import './Watch.css';

function Watch() {

    return (
        <div className="watch">
            <div className="circle">
                <div className="circle_1">
                    <div className="time">
                        <div className="time-section">
                            <h4>59</h4>
                            <span>min</span>
                        </div>
                        <h3>:</h3>
                        <div className="time-section">
                            <h4>50</h4>
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
