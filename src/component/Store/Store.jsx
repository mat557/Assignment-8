import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [items,setItem] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() =>{
        fetch(`fake.json`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[]);

    const addToCart = (data) =>{
        console.log(data);
        const newCart = [...cart,data];
        setCart(newCart)
    }

    return (
        <div className='total-container'>
            <div className="store-container">
                {
                    items.map(item => 
                    <Product
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Selected Items</h4>
                <p>Total item :{cart.length}</p>
            </div>
        </div>
    );
};

export default Store;