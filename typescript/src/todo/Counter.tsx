import React, { ReactNode } from 'react'

type CounterType = {
    setCount: React.Dispatch<React.SetStateAction<number>>
    children: ReactNode
}

const Counter = ({ setCount, children }: CounterType) => {

    return (
        <div>
            {children}
            <button onClick={() => setCount(prv => prv + 1)}>+</button>
            <button onClick={() => setCount(prv => prv - 1)}>-</button>
        </div>
    )
}

export default Counter
