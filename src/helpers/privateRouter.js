import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getToken} from './utils';



function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!getToken()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/Signin', state: { from: props.location } }} />
            }
            // logged in so return component
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };