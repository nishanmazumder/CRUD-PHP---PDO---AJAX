import React from 'react';

import { useState } from "react";

export function App() {
    const [name, setName] = useState('Type your name!');

    return (
        <>
            <h1>{name}</h1>
            <input type="text" onChange={(e) => {
                setName(e.target.value);
            }} />
        </>
    )
}
