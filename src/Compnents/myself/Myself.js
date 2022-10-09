import React from 'react';
import Special from '../uncle/special/Special';
import './Myself.css'
const Myself = ({house, ring}) => {
    return (
        <div>
          <h2>myself</h2> 
            <p>House:{house} </p> 
            <section>
                <Special house={house} ring={ring} ></Special>
            </section>
        </div>
    );
};

export default Myself;