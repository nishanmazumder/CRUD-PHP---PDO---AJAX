import React, { ReactElement, ReactNode, createContext, useCallback, useContext, useReducer } from 'react';


type StateType = {
    count: number;
}

const initState: StateType = { count: 0 }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

const useCounterContext = (text: StateType) => {

    const [count, dispatch] = useReducer(reducer, text);

    const increment = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), [])
    const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), [])

    return { count, increment, decrement };
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE
}

function reducer(state: StateType, action: ReducerAction): StateType {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            throw new Error()
    }
}

type CounterContextType = ReturnType<typeof useCounterContext>

const initStateContext: CounterContextType = {
    count: initState,
    increment: () => { },
    decrement: () => { }
}

const CounterContext = createContext<CounterContextType>(initStateContext);

type CounterProvideType = {
    children: JSX.Element
}

export const CounterProvider = ({ children }: CounterProvideType): ReactElement => {

    // console.log("------------");

    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    );

}

export const useCounter = () => {
    const allValues = useContext(CounterContext);

    return allValues;
}
