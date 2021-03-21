import { Button, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import './SearchingInLeftPanel.css';
import React, { createContext, useContext, useState } from 'react';
import { ContextForHasBeenSearched, ContextForLocations } from '../RidingPage/RidingPage';
import clsx from 'clsx';

// component for the searching section

// style from material ui
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
    
    // initializing the contexts and style
    const classes = useStyles();
    const locationInfoFromContext = useContext(ContextForLocations);
    const hasBeenSearched = useContext(ContextForHasBeenSearched);
    
    // when the confirm button for searching the vehicle is pressed
    const handleConfirmButtonClick = () => {
      validateInput([locationInfoFromContext[0] , "pickUpErrMessage"]) && validateInput([locationInfoFromContext[1] , "destinationErrMessage"]) && hasBeenSearched[1](true);
    }

    // validation of the input field
    const validateInput = (props) => {
      if(props[0][0]===''){
        document.getElementById(props[1]).style.display="block";
        return false;
      }
      else{
        document.getElementById(props[1]).style.display="none";
        return true;
      }
    }
    
    return (
        
            <div className="searchingInLeftPanelMainDiv">
                <p><strong>Pick Up Location</strong></p>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" onBlur={() => validateInput([locationInfoFromContext[0] , "pickUpErrMessage"])} onChange={event => locationInfoFromContext[0][1](event.target.value)}>
                    <InputLabel htmlFor="component-outlined">From</InputLabel>
                    <OutlinedInput id="component-outlined"  label="Email" />
                </FormControl>
                <p><small className="errorMsgUnderField" id="pickUpErrMessage">Pick Up Location Not Set</small></p>
                <p><strong>Drop Out Location</strong></p>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" onBlur={() => validateInput([locationInfoFromContext[1] , "destinationErrMessage"])} onChange={event => locationInfoFromContext[1][1](event.target.value)}>
                    <InputLabel htmlFor="component-outlined">To</InputLabel>
                    <OutlinedInput id="component-outlined"  label="Email" />
                </FormControl>
                <p><small className="errorMsgUnderField" id="destinationErrMessage">Destination Location Not Set</small></p>
                <div className="confirmButtonDiv">
                    <Button variant="contained" color="secondary" onClick={()=>handleConfirmButtonClick()}>
                        Confirm
                    </Button>
                </div>
            </div>
    );
};

export default SearchingInLeftPanel;