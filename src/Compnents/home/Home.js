import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import Tshirt from '../tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState ([]);

    const handleAddToCat = tshirt =>{
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            alert('tshirt already added')
        }
        else {

            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    const handleremoveItem = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
           <div className="tshirt-container">
              
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id}
                         tshirt={tshirt}
                          handleAddToCat={handleAddToCat}
                           ></Tshirt>)
                }
           </div>
           <div className="cart-container">
                <Cart 
                cart={cart}
                    handleremoveItem={handleremoveItem}
                 ></Cart>

           </div>
        </div>
    );
};

export default Home;