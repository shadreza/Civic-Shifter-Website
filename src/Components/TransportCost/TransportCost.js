import React from 'react';
import './TransportCost.css';

// this component is in the searched result and will show the cost for the selected transport to go to the destination -- dummy values are used

const TransportCost = (props) => {
    const {name , photo} = props.transportData[0];
    
    // setting up the fake data
    let fare = 0.0;
    if(name === 'Bike'){
        fare = 150.00;
    }
    else if(name === 'Car'){
        fare = 250.00;
    }
    else if(name === 'Bus'){
        fare = 80.00;
    }
    else if(name === 'Train'){
        fare = 50.00;
    }
    else{
        fare = 0.0;
    }

    return (
        <div className='transportCostMainDiv'>
            <div className="leftSideImage">
                <img src={photo} alt=""/>
            </div>
            <div className="rightSideInfo">
                <p><strong>{name}</strong></p>
                <p>${fare}</p>
            </div>
        </div>
    );
};

export default TransportCost;