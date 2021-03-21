import { Link } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Redirect, Switch } from 'react-router';
import { useHistory } from 'react-router-dom';
import { ContextForTransport, ContextForUser } from '../../App';
import './CardForTransport.css';

// this component is for the single cards that hold the info of the transport or vehicle and will be shown in the homepage as the element in the gallery

const CardForTransport = (props) => {

    // initializing necessary things
    let history = useHistory();
    const {nameOfTheTransport , imageOfTheTransport} = props.cardInfo;
    const transportInfoFromContext = useContext(ContextForTransport);
    const userInfoFromContext = useContext(ContextForUser);


    // when the element or a single card or the transport is clicked
    const handleClickOnDiv = () => {
        const transportInfo = {
            name: nameOfTheTransport ,
            photo: imageOfTheTransport 
        };
        console.log(transportInfo);
        transportInfoFromContext[1](transportInfo);
        transportInfoFromContext[1](transportInfo);
        if(userInfoFromContext[0].isLoggedInOrNot === true){
            history.push("/destination");
        }
        else{
            alert('Please Log In First');
            history.push("/login");
        }
    }

    return (
        <div className="cardForTransportMainDiv" onClick={()=>{handleClickOnDiv()}}>
            <img src={imageOfTheTransport} alt="..."/>
            <br/>
            <h3>{nameOfTheTransport}</h3>
        </div>
    );
};

export default CardForTransport;