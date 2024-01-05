import React, { useCallback, useEffect, useMemo, useState, useReducer, MouseEvent, KeyboardEvent, useRef, ChangeEvent } from 'react'
import Heading from './Heading';
import { TitleContext } from './Context';

type UserType = {
    id: number,
    name: string
}

const initState = { count: 0, text: '' }

const enum ActionType {
    INCREMENT, DECREMENT, INPUT
}

function Hook() {

    const [user, setUser] = useState<UserType[] | null>(null);

    const [count, setCount] = useState<number>(1);

    const [input, setInput] = useState<string>('test');

    const [redCount, dispatch] = useReducer(reducer, initState);



    const inputRef = useRef<HTMLInputElement>(null);


    console.log(inputRef.current?.value);

    const callBackCount = useCallback((): void => setCount(prv => prv + 1), [])
    // const callBackCount = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void =>



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

    const increment = () => {
        dispatch({ type: ActionType.INCREMENT })
    }

    const decrement = () => {
        dispatch({ type: ActionType.DECREMENT })
    }

    const handleInputReducer = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ActionType.INPUT, payload: e.target.value })
    }

    return (
        <div>
            <TitleContext.Provider value={"Hook Title Context!"}>
                <Heading />
            </TitleContext.Provider>
            <button onClick={callBackCount}>Add</button>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <input type="text" placeholder='check' ref={inputRef} />
            <h1>{redCount.count}</h1>
            <button onClick={increment}>INC</button>
            <button onClick={decrement}>DEC</button>
            <h1>{redCount.text}</h1>
            <input type="text" onChange={handleInputReducer} />
        </div>
    )
}

const expensiveCalculation = (count: number): number => {
    for (let i = 0; i < 1000; i++) {
        count += 1
    }

    return count;
}

type ReducerAction = {
    type: ActionType,
    payload?: string
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return { ...state, count: state.count + 1 }
        case ActionType.DECREMENT:
            return { ...state, count: state.count - 1 }
        case ActionType.INPUT:
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error()
    }
}

export default Hook
