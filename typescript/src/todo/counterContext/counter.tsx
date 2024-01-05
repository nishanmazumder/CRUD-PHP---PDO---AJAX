import React, { ReactElement, ReactNode } from 'react'
import { useCounter } from './context'

type CounterType = {
    children: (num: number) => ReactNode
}

export default function Counter({ children }: CounterType): ReactElement {
    const { count: { count }, increment, decrement } = useCounter();

    console.log('--------------');
    // console.log(counterVal);

    return (
        <>
            <div>{children(count)}</div>
            <button onClick={decrement}>Minus</button>
            <button onClick={increment}>Plus</button>
        </>
    )
}
