import { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
        const {cart} = props;
        const {prodcts , setProdct} = useState([]);
        
        const item = [];
        for(const ele of cart){
            const a = ele.name;
            item.push(a);
        }

        const randomElement = () =>{
            setProdct([])
            if(item.length){
            const selectedItem = item[Math.floor(Math.random()*item.length)];
            setProdct([selectedItem]);
            }
        }
        return (
            <div className='element'>
                <h4>Selected Items:{item.length}</h4>
                {
                    item.map(display => 
                    <h5
                    key={display}
                    >{display}</h5>)
                }
                <button onClick={randomElement} className='btn-show'>Pick Random One</button>
                <p>{prodcts}</p>
            </div>
        );
    
};

export default Cart;