import React from 'react'
import Counter from './counter'

export default function AppContext() {



    return (
        <Counter>{(num: number) => <>Counter: {num}</>}</Counter>
    )
}
