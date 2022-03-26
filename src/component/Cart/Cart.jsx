import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const {cart} = props;
    const item = [];
    for(const product of cart){
        item.push(product.name)
    }
    console.log(item)

    const randomElement = () =>{
        var randomItem = item[Math.floor(Math.random()*item.length)];
    }
    
    // console.log(name)
    if(cart.length > 4){
        alert('You cant select 4 times');
        
    }
    
        return (
            <div className='element'>
                <h4>Selected Items</h4>
                <p>Total item :{cart.length}</p>
                {
                    item.map(bro => <h6>{bro}</h6>)
                }
                <button onClick={randomElement} className='btn-show'>Pick Random One</button>
                <h1>Selected Item:{}</h1>
            </div>
        );
    
};

export default Cart;