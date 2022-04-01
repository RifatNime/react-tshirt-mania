
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {

    // const [house, ornament, setHouse] = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Special one</h4>
            {/* <p><small>Gift: {ornament}</small></p> */}
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>
            
        </div>
    );
};

export default Special;