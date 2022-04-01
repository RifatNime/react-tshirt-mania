import React, { useState } from 'react';
import useTShirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'


const Home = () => {

    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useTShirts([]);

    const handleAddToCart = (selectedItem) => {
        // console.log(seletedItem);
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert(`"${exists.name}" item already added.`)
        }

    }
    const handleRemoveFromCart = (selectedItem) => {

        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);

    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">

                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    key={cart._id}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;