import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleremoveItem }) => {
    const {name, _id, price,} = cart
    let message;
    if(cart.length === 0){
        message = <p>please! buy atleast one item</p>
    }
    else if (cart.length === 1 ){
        message = <div>
            <p>amar jonno 100ta nis</p>
            <p> tor jonno akta nis</p>
            <p><small>amallay arekta nis</small></p>
        </div>
    }
    else{
        message = <p>Thanks for buying</p>
    }
    return (
        <div >
            <h3 className={cart.length === 2 ? 'orange': `purple`}>order summary</h3>
            <h4 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`} >order Quantity: {cart.length} </h4>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    name: {tshirt.name}
                    <button onClick={() => handleremoveItem(tshirt)}>X</button>
                </p> )
            }
            {
                message
            }
        </div>
    );
};

export default Cart;