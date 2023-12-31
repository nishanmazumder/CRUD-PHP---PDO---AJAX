import React, { useCallback, useEffect, useMemo, useState, MouseEvent, KeyboardEvent, useRef } from 'react'
import Heading from './Heading';

type UserType = {
    id: number,
    name: string
}

function Hook() {

    const [user, setUser] = useState<UserType[] | null>(null);

    const [count, setCount] = useState<number>(1);


    const [input, setInput] = useState<string>('test');

    console.log(input);

    // const inputRef = useRef<HTMLInputElement>(null);


    // console.log(inputRef.current?.value);


    const callBackCount = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void =>
        setCount(prv => prv + 1), [])


    const expensive = useMemo<number>(() => expensiveCalculation(count), [count]);
    // const expensive = expensiveCalculation(count);


    // var startTime = performance.now()
    console.time('fn check')

    console.log(expensive);

    // var endTime = performance.now()
    console.timeEnd('fn check')

    // console.log(`Took ${((endTime - startTime)).toFixed(3)} ms`)


    useEffect(() => {

        console.log("Mount");
        console.log("User", user);

        return () => console.log("Unmount");
    }, [user])

    return (
        <div>
            <Heading title={'HOOK'} />
            <button onClick={callBackCount}>Add</button>
            <input className='hook_input' type="text" onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}

const expensiveCalculation = (count: number): number => {
    for (let i = 0; i < 10000000000; i++) {
        count += 1
    }

    return count;
}

export default Hook
