import { Button, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import './SearchedResultInLeftPanel.css';
import React, { createContext, useContext, useState } from 'react';
import { ContextForHasBeenSearched, ContextForLocations } from '../RidingPage/RidingPage';

import { ContextForTransport } from '../../App';
import TransportCost from '../TransportCost/TransportCost';

// component to show he searched result 

const SearchedResultInLeftPanel = () => {

    // the array is for looping for 3 times
    const array = [0,1,2];

    // initializing
    const hasBeenSearched = useContext(ContextForHasBeenSearched);
    const transportInfoFromContext = useContext(ContextForTransport);
    const locationInfoFromContext = useContext(ContextForLocations);


    return (
        <div className="searchedResiultInLeftPanelMainDiv">
            <div className="fromToInformationDiv">
                <p><strong>Pick Up Location</strong></p>
                <h3>{locationInfoFromContext[0][0]}</h3>
                <p><strong>Drop Out Location</strong></p>
                <h3>{locationInfoFromContext[1][0]}</h3>
            </div>
            <div className="transportDiv">
                {
                    array.map(()=><TransportCost transportData={transportInfoFromContext}></TransportCost>)
                }
            </div>
        </div>
    );
};

export default SearchedResultInLeftPanel;