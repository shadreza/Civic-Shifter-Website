import React from 'react';
import './Header.css';
import { Link, Router } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Header = () => {
    return (
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
    );
};

export default Header;