import React, { useContext, useEffect } from 'react';
import './Header.css';
import { Button } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import RidingPage from '../RidingPage/RidingPage';
import { useHistory } from 'react-router-dom';
import { ContextForTransport, ContextForUser } from '../../App';
import firebase from 'firebase';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import PrivateRouteForDestinationPath from '../PrivateRouteForDestinationPath/PrivateRouteForDestinationPath';

const Header = () => {

    let history = useHistory();

    const userInfoFromContext = useContext(ContextForUser);
    const transportInfoFromContext = useContext(ContextForTransport);

    const defaultUser  = {
        name:"not set" ,
        email: "not set" ,
        photo: "not set" ,
        isLoggedInOrNot : false
      }

      const defaultTransport = {
        name:"not set" ,
        photo: "not set" 
      }
    
      const handleSignOutButton = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            userInfoFromContext[1](defaultUser);
            transportInfoFromContext[1](defaultTransport);
            alert('Signed Out!');
            console.log('signed out');
          }).catch((error) => {
            // An error happened.
            alert(error.message);
            console.log(error.code);
          });
          
      }

    
    return (
        <Router>
            <div className="headerMainDiv">
                <section className="headerTitleOnLeft">
                    <Link className="navLinks" to='/'>
                        <h2>Civic Shifter</h2>
                    </Link>
                </section>
                
                <section className="headerNavLinksOnRight">
                    <nav>
                        <Link className="navLinks" to='/' >Home</Link>
                        <Link className="navLinks" to='/destination' >Destination</Link>
                        {
                            userInfoFromContext[0].isLoggedInOrNot ===  false ? 
                                <Link className="navLinks" to='/login' >
                                    {
                                        <Button variant="outlined" color="secondary">
                                            Login
                                        </Button>
                                    }
                                </Link> :
                                <Link className="navLinks" to='/'  onClick={() => handleSignOutButton()}>
                                    {
                                        <Button variant="outlined" color="secondary">
                                            Logout
                                        </Button>
                                    }
                                </Link>
                        }
                        <Link className="navLinks" to='/personalInfo' >
                           {userInfoFromContext[0].photo !== "not set" && <img className="imageOfUser" src={userInfoFromContext[0].photo}></img>} 
                        </Link>
                    </nav>
                </section>
            </div>
            <Switch>
                <Route path="/personalInfo">
                    <PersonalInfo></PersonalInfo>
                </Route>
                <Route path="/signup">
                    <Signup></Signup>
                </Route>
                <PrivateRouteForDestinationPath path="/destination">
                    <RidingPage></RidingPage>
                </PrivateRouteForDestinationPath>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/">
                    <HomePage></HomePage>
                </Route>
            </Switch>
        </Router>
    );
};

export default Header;