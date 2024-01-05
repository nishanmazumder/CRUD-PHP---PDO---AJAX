import React, { ReactElement, ReactNode } from 'react'

type CounterType = {
    children: (num: number) => ReactNode
}

export default function Counter({ children }: CounterType): ReactElement {

    console.log('--------------');

    return (
        <div>{children(10)}</div>
    )
}
