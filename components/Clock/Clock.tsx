"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(()=> {
        const interval = setInterval(()=>{
            setTime( new Date() );
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    })
    return (
        <div>
            <h2>Current Date: { time.toLocaleDateString() }</h2>
            <h2>Current Time: { time.toLocaleTimeString() }</h2>
        </div>
    );
}