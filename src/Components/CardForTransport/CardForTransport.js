import React from 'react';
import './CardForTransport.css';

const CardForTransport = (props) => {
    return (
        <div className="cardForTransportMainDiv">
            <img src={props.cardInfo.imageOfTheTransport} alt="..."/>
            <br/>
            <h3>{props.cardInfo.nameOfTheTransport}</h3>
        </div>
    );
};

export default CardForTransport;