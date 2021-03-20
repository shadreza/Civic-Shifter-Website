import React, { useContext } from 'react';
import { ContextForHasBeenSearched } from '../RidingPage/RidingPage';

const SearchingInLeftPanel = () => {
    const hasBeenSearched = useContext(ContextForHasBeenSearched);
    return (
        <div>
            <p>searching</p>
        </div>
    );
};

export default SearchingInLeftPanel;