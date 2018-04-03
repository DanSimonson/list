import React from 'react';
//import './Person.css';

const car = ( props ) => {
    return (
        <div className="Car">
            <p onClick={props.click}> I'm a {props.make} {props.model} </p>
        </div>
    )
};

export default car;