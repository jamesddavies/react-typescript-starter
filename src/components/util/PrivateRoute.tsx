import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { decodedJWT } from '../../interfaces/apiResponses';

interface PrivateRouteProps {
    component: any;
    path: string;
    auth: boolean;
    loaded: boolean;
    tokenDetails: decodedJWT | null;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    let Component = props.component;
    let auth = props.auth;
    let tokenDetails = props.tokenDetails;
    let path = props.path;
    
    if (!props.loaded) {
        return <div></div>;
    } else {
        return (
            <Route render={props => (
                <div>
                    {!auth && <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />}
                    <Component {...{tokenDetails, path}} />
                </div>
            )}/>
        )
    }
}

export default PrivateRoute;