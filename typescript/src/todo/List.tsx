import React, { ReactNode } from 'react';

interface ListType<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListType<T>) => {
    return (
        <ul>
            {items.map((item, i) => <li key={i}> {render(item)} </li>)}
        </ul>
    )
}

export default List
