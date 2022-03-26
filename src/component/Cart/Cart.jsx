import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(props)
    return (
        <div className='element'>
            <h4>Selected Items</h4>
            <p>Total item :{cart.length}</p>
        </div>
    );
};

export default Cart;