import { Button, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import './SearchedResultInLeftPanel.css';
import React, { createContext, useContext, useState } from 'react';
import { ContextForHasBeenSearched, ContextForLocations } from '../RidingPage/RidingPage';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '46ch',
    },
  }));

const SearchedResultInLeftPanel = () => {
    const classes = useStyles();
    const hasBeenSearched = useContext(ContextForHasBeenSearched);
    const locationInfoFromContext = useContext(ContextForLocations);
    return (
        <div className="searchedResiultInLeftPanelMainDiv">
            <div className="fromToIndormationDiv">
                <p><strong>Pick Up Location</strong></p>
                <h3>{locationInfoFromContext[0][0]}</h3>
                <p><strong>Drop Out Location</strong></p>
                <h3>{locationInfoFromContext[1][0]}</h3>
            </div>
            <div className="transportDiv">
                
            </div>
        </div>
    );
};

export default SearchedResultInLeftPanel;