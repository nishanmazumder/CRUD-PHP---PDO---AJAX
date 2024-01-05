import React, { ReactElement, ReactNode, useContext } from 'react';

import { TitleContext } from './Context';

type HeadingProps = {
    title: string
}

console.log(TitleContext);

type sectionType = {
    title?: string,
    children: ReactNode
};

const Section = ({ children, title = "My Section" }: sectionType) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{children}</p>
        </>
    );
}

// const Heading = ({ title }: HeadingProps): ReactElement => {
const Heading = (): ReactElement => {

    console.log("Heading");

    const useTitleContext = useContext(TitleContext);

    console.log(useTitleContext);

    return (<>
        {/* <h1>{title}</h1> */}
        <h1>{useTitleContext}</h1>
        <Section>
            {"my Section child"}
        </Section>
    </>)
}

export default Heading; 
