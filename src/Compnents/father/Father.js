import React from 'react';
import Brother from '../brother/Brother';
import Myself from '../myself/Myself';
import Sister from '../sister/Sister';

const Father = ({house, ring}) => {
    return (
        <div>
            <h3>father</h3>
            <p><small>House:{house} </small></p>
            <section className='flex'>
                <Myself house={house} ring={ring} ></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;