import React from 'react';
import './HomePage.css';
import FakeDataOfTransportJson from '../FakeData/FakeDataForTransports.json';
import CardForTransport from '../CardForTransport/CardForTransport';

const HomePage = () => {
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