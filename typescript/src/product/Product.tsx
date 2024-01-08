import React from 'react'
import { ProductType } from './context/ProductProvider'

type PropsType = {
    product: ProductType
}

export default function Product({ product }: PropsType) {

    // console.log("test");

    // return;

    const img: string = new URL(`./images/${product.sku}.jpg`, import.meta.url).href;

    console.log(img);

    const itemInCart = 'Item in cart.';

    // console.log(product.sku);


    return (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={'./images/item0001.jpg'} alt={product.name} className="" />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
            {/* <button onClick={onAddToCart}>Add to Cart</button> */}
        </article>
    )
}
