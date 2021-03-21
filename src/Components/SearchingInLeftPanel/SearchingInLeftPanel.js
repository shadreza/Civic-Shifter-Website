import { Button, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import './SearchingInLeftPanel.css';
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
      width: '30ch',
    },
  }));

const SearchingInLeftPanel = () => {
    
    const classes = useStyles();
    const hasBeenSearched = useContext(ContextForHasBeenSearched);
    const handleConfirmButtonClick = () => {
        hasBeenSearched[1](true);
    }
    const locationInfoFromContext = useContext(ContextForLocations);
    return (
        
            <div className="searchingInLeftPanelMainDiv">
                <p><strong>Pick Up Location</strong></p>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" onChange={event => locationInfoFromContext[0][1](event.target.value)}>
                    <InputLabel htmlFor="component-outlined">From</InputLabel>
                    <OutlinedInput id="component-outlined"  label="Email" />
                </FormControl>
                <p><strong>Drop Out Location</strong></p>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" onChange={event => locationInfoFromContext[1][1](event.target.value)}>
                    <InputLabel htmlFor="component-outlined">To</InputLabel>
                    <OutlinedInput id="component-outlined"  label="Email" />
                </FormControl>
                <div className="confirmButtonDiv">
                    <Button variant="contained" color="secondary" onClick={()=>handleConfirmButtonClick()}>
                        Confirm
                    </Button>
                </div>
            </div>
    );
};

export default SearchingInLeftPanel;