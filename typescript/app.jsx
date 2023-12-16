import { useState } from "react";

export function App() {
    const [name, setName] = useState('Type your name!');

    return (
        <>
            <p>react test</p>
            <h1>{name}</h1>
            <input type="text" onChange={(e) => {
                setName(e.target.value);
            }} />
        </>
    )
}
