import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt, handleAddToCat }) => {
    const {name, picture, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
           <h2>{name} </h2> 
           <p>{price} </p>
            <button onClick={() => handleAddToCat(tshirt)}>Buy this </button>
        </div>
    );
};

export default Tshirt;