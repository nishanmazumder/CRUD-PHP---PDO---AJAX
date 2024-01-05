import React from 'react'
import Counter from './counter'
import { CounterProvider } from './context'

export default function AppContext() {
    return (
        <CounterProvider>
            <Counter>{(num: number) => <>Counter: {num}</>}</Counter>
        </CounterProvider>
    )
}
