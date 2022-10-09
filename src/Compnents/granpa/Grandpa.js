import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../father/Father';
import Uncle from '../uncle/Uncle';
import './Grandpa.css'
const Grandpa = () => {
    const house = 7;
    const ring = 'diamond ring';
    const RingContext = createContext('matir ring')
    return (
        <div className='grandpa'>
            <h1>grandpa</h1>
            <section className='flex'>
                <Father house={house} ring={ring} ></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;