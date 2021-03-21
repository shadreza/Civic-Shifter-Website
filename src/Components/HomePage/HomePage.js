import React, { useContext, useEffect } from 'react';
import './HomePage.css';
import FakeDataOfTransportJson from '../FakeData/FakeDataForTransports.json';
import CardForTransport from '../CardForTransport/CardForTransport';
import { ContextForTransport } from '../../App';

const HomePage = () => {
    const transportInfoFromContext = useContext(ContextForTransport);
    useEffect(() =>{
        const defaultTransport = {
            name:"not set" ,
            photo: "not set" 
        }
        transportInfoFromContext[1](defaultTransport);
    },[])
    return (
        <div className="homepageMainDiv">
            <section className="transportsGallerySection">
                {
                    FakeDataOfTransportJson.map( transport => <CardForTransport cardInfo={transport}></CardForTransport> )
                }
            </section>
        </div>
    );
};

export default HomePage;