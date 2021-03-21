import React, { useContext, useEffect } from 'react';
import './HomePage.css';
import FakeDataOfTransportJson from '../FakeData/FakeDataForTransports.json';
import CardForTransport from '../CardForTransport/CardForTransport';
import { ContextForTransport } from '../../App';

// component for the homepage where the transport gallery will be the main thing

const HomePage = () => {

    // initializing the transport info from context
    const transportInfoFromContext = useContext(ContextForTransport);

    // sensing for change in the transport state
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