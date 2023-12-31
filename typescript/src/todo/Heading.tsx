import React, { ReactElement, ReactNode } from 'react';

type HeadingProps = {
    title: string
}

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

const Heading = ({ title }: HeadingProps): ReactElement => {

    console.log("Heading");

    return (<>
        <h1>{title}</h1>
        <Section>
            {"my Section child"}
        </Section>
    </>)
}

export default Heading; 
