import React, { FunctionComponent, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './todo/App'

const TSXApp: FunctionComponent = (): JSX.Element => {

    const [text, setText] = useState<string>("Hello, TSX!")

    return <div>{text}</div>;
};

type AppProps = {
    message: string;
};

// const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

const ele = document.querySelector('.tsx_block') as HTMLElement;
const root = createRoot(ele);
// root.render(<TSXApp />);
root.render(<App />);
