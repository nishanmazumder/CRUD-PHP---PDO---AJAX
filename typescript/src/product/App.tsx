import React from 'react';
import ProductList from './ProductList';
import { ProductProvider } from './context/ProductProvider';

export default function App() {
    return (
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    )
}
