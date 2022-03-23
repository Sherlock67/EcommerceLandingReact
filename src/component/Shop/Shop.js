import React, { useEffect, useState } from 'react';
import { addToDb, getSortedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[]);
    useEffect(()=>{
        const storedCart = getSortedCart();
        for(const id in storedCart){
            const addedProduct = products.find(product =>product.id === id)
            console.log(addedProduct);
        }
    },[]);
    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart,product ];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;