import React, { createContext, useState } from 'react';
import Map from '../Map/Map';
import SearchedResultInLeftPanel from '../SearchedResultInLeftPanel/SearchedResultInLeftPanel';
import SearchingInLeftPanel from '../SearchingInLeftPanel/SearchingInLeftPanel';
import './RidingPage.css';

export const ContextForHasBeenSearched = createContext([]);

const RidingPage = () => {

    const [hasBeenSearchedValue , sethasBeenSearchedValue] = useState(false);

    return (
        <ContextForHasBeenSearched.Provider value={[hasBeenSearchedValue , sethasBeenSearchedValue]}>
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
        </ContextForHasBeenSearched.Provider>
    );
};

export default RidingPage;