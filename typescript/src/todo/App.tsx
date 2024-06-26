import React, { createContext, useState } from 'react'
import Heading from "./Heading";
import Counter from './Counter';
import List from './List';
import Hook from './Hook';

import { TitleContext } from './Context';
import AppContext from './counterContext/app';



console.log(TitleContext);


function App() {
    const [count, setCount] = useState<number>(1);

    return (
        <>
            <AppContext />

            <TitleContext.Provider value={'Hello Context!'}>
                <Heading />
            </TitleContext.Provider>

            <Counter setCount={setCount}>
                This is counter: {count}
            </Counter>
            <List items={["item1", "item2", "item3"]}
                render={(item: string) => <span>{item}</span>} />

            <Hook />

        </>
    )
}

export default App;
