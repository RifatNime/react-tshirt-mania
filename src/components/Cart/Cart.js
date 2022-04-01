import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering option
    //1.Element variable
    //2. ternary operator condition ? true : false
    // 3. && oparetor (shorthand)
    // 4. or || oparetor (shorthand)
    let command;
    if (cart.length === 0) {
        command = <div>
            <p>Please add at least one items !</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p><small>Please add more items...</small></p>
    }
    else {
        command = <p><small>Thanks for adding items !</small></p>
    }
    return (
        <div>
            <h2>Slected Items: {cart.length}</h2>
            
            {
                cart.map(tShirt =>
                    <p>{tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }
            {cart.length ===0 || <div className='orange'>
                <p>Buying Products</p> 
                </div>}
            {cart.length ===3 && <div className='orange'>
                <h3>Trygonal</h3>
                <p>Gifted</p>
                </div>}
            {command}
            {cart.length !==4 ? <p>Keep Adding</p>: <button>Remove All</button>}
        </div>
    );
};

export default Cart;