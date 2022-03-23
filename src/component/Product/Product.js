import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    console.log(props.product);
    const {name,img,seller,price,ratings} =props.product; 
  
    return (
        <div className='product'>
            <div className='product-info'>
            <img src={img} alt=""></img>
            <p className='product-name'> {name}</p>
            <p><small>Price : {price}</small></p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Rating : {ratings}</small></p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
           

        </div>
    );
};

export default Product;