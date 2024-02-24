"use client";

import { useState} from "react";

export default function Conditional() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show ? <h1>Toggle On</h1> : <h1>Toggle Off</h1>}
        </>
    );
}