import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img,name,price}=props.item;
    const {addToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-des'>
                <h5>Name : {name}</h5>
                <h5>Price : ${price}</h5>
                <button onClick={() => addToCart(props.item)} className='btn-info'>Add To Cart<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;