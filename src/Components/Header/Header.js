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
import { ContextForUser } from '../../App';
import firebase from 'firebase';

const Header = () => {

    let history = useHistory();

    const userInfoFromContext = useContext(ContextForUser);

    const defaultUser  = {
        name:"not set" ,
        email: "not set" ,
        photo: "not set" ,
        isLoggedInOrNot : false
      }
    
      const handleSignOutButton = () => {
        userInfoFromContext[1](defaultUser);
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
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
                <section className="headerUserImageInMiddle">
                    {userInfoFromContext[0].photo !== "not set" && <img className="imageOfUser" src={userInfoFromContext[0].photo}></img>}
                </section>
                <section className="headerNavLinksOnRight">
                    <nav>
                        <Link className="navLinks" to='/' >Home</Link>
                        <Link className="navLinks" to='/destination' >Destination</Link>
                        <Link className="navLinks" to='/contact' >Contact</Link>
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
                        
                    </nav>
                </section>
            </div>
            <Switch>
                <Route path="/signup">
                    <Signup></Signup>
                </Route>
                <Route path="/destination">
                    <RidingPage></RidingPage>
                </Route>
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