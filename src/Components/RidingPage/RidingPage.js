import React, { createContext, useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { ContextForTransport, ContextForUser } from '../../App';
import Map from '../Map/Map';
import SearchedResultInLeftPanel from '../SearchedResultInLeftPanel/SearchedResultInLeftPanel';
import SearchingInLeftPanel from '../SearchingInLeftPanel/SearchingInLeftPanel';
import './RidingPage.css';

export const ContextForHasBeenSearched = createContext([]);
export const ContextForLocations = createContext([]);

const RidingPage = () => {

    let history = useHistory();

    const userInfoFromContext = useContext(ContextForUser);
    const transportInfoFromContext = useContext(ContextForTransport);
    if(userInfoFromContext[0].isLoggedInOrNot === false){
        alert('Please Log In First');
        history.replace('/login/');
    }
    else if(transportInfoFromContext[0].name ==='not set' && transportInfoFromContext[0].photo ==='not set'){
        alert('Please Select Transport Type First');
        history.replace('/');
    }

    const [hasBeenSearchedValue , sethasBeenSearchedValue] = useState(false);
    const [fromLocation , setFromLocation] = useState('');
    const [toLocation , setToLocation] = useState('');

    return (
        <ContextForHasBeenSearched.Provider value={[hasBeenSearchedValue , sethasBeenSearchedValue]}>
            <ContextForLocations.Provider value={[[fromLocation , setFromLocation],[toLocation , setToLocation]]}>
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