import React, { createContext, useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { ContextForTransport, ContextForUser } from '../../App';
import Map from '../Map/Map';
import SearchedResultInLeftPanel from '../SearchedResultInLeftPanel/SearchedResultInLeftPanel';
import SearchingInLeftPanel from '../SearchingInLeftPanel/SearchingInLeftPanel';
import './RidingPage.css';

// riding page is dynamic which will have map on the right and on the left the seraching section or the serached result section will be shown

// exporting context with declaration
export const ContextForHasBeenSearched = createContext([]);
export const ContextForLocations = createContext([]);

const RidingPage = () => {

    // initializing
    let history = useHistory();
    const userInfoFromContext = useContext(ContextForUser);
    const transportInfoFromContext = useContext(ContextForTransport);

    // user logged in or what
    if(userInfoFromContext[0].isLoggedInOrNot === false){
        alert('Please Log In First');
        history.replace('/login/');
    }
    else if(transportInfoFromContext[0].name ==='not set' && transportInfoFromContext[0].photo ==='not set'){
        alert('Please Select Transport Type First');
        history.replace('/');
    }

    // declaring name of the user
    let nameToShow = '';
    // console.log(userInfoFromContext[0]);

    // setting the name
    if(userInfoFromContext[0].name === 'not set' || userInfoFromContext[0].name === null){
        nameToShow = userInfoFromContext[0].email;
    }
    else{
        nameToShow = userInfoFromContext[0].name;
    }

    // initializing the states
    const [hasBeenSearchedValue , sethasBeenSearchedValue] = useState(false);
    const [fromLocation , setFromLocation] = useState('');
    const [toLocation , setToLocation] = useState('');

    return (
        <ContextForHasBeenSearched.Provider value={[hasBeenSearchedValue , sethasBeenSearchedValue]}>
            <ContextForLocations.Provider value={[[fromLocation , setFromLocation],[toLocation , setToLocation]]}>
                <section className="nameOfTheUser">
                    <p><strong>{nameToShow}</strong></p>
                </section>
                <section className="ridingPageMainDiv">
                    <section className="leftPannelSearch">
                        {                    
                            hasBeenSearchedValue === false ? <SearchingInLeftPanel/> : <SearchedResultInLeftPanel/>
                        }
                    </section>
                    <section className="rightPannelMap">
                        <Map></Map>
                    </section>
                </section>
            </ContextForLocations.Provider>
        </ContextForHasBeenSearched.Provider>
    );
};

export default RidingPage;