import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ContextForUser } from '../../App';

// private route component

const PrivateRouteForDestinationPath = ({children , ...rest}) => {

  // private router work is done here
    const userInfoFromContext = useContext(ContextForUser);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        userInfoFromContext[0].isLoggedInOrNot === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRouteForDestinationPath;