import { Link } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Redirect, Switch } from 'react-router';
import { useHistory } from 'react-router-dom';
import { ContextForTransport, ContextForUser } from '../../App';
import './CardForTransport.css';

const CardForTransport = (props) => {

    let history = useHistory();

    const {nameOfTheTransport , imageOfTheTransport} = props.cardInfo;

    const transportInfoFromContext = useContext(ContextForTransport);

    const userInfoFromContext = useContext(ContextForUser);

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