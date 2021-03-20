import React from 'react';
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

const Header = () => {
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
                        <Link className="navLinks" to='/contact' >Contact</Link>
                        <Link className="navLinks" to='/login' >
                            {
                                <Button variant="outlined" color="secondary">
                                    Login
                                </Button>
                            }
                        </Link>
                    </nav>
                </section>
            </div>
            <Switch>
                <Route path="/contact">
                    <Signup></Signup>
                </Route>
                <Route path="/">
                    <HomePage></HomePage>
                </Route>
            </Switch>
        </Router>
    );
};

export default Header;