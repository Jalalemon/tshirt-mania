import React from 'react';
import Friend from '../friend/Friend';
import './Cousin.css'
const Cousin = ({house}) => {
    return (
        <div>
            <h1>cousin</h1>
            <p>House:{house} </p>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;