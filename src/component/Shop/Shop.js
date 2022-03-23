import React, { useEffect, useState } from 'react';
import { addToDb, getSortedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        console.log('products load first before fetch');
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[]);
    useEffect(()=>{
        console.log('products load first before fetch');
        const storedCart = getSortedCart();
        const savedCart  = [];
        for(const id in storedCart){
            const addedProduct = products.find(product =>product.id === id)
            if(addedProduct){
                  const quantity = storedCart[id];
                  addedProduct.quantity = quantity;
                  savedCart.push(addedProduct);
            }
           
        }
        setCart(savedCart);
    },[products]);
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