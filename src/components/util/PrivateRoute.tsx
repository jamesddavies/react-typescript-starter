import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

interface PrivateRouteProps {
    component: any
    auth: boolean
    loaded: boolean
    params: any
}

const PrivateRoute: React.SFC<PrivateRouteProps> = (props: PrivateRouteProps) => {
    let Component = props.component
    let auth = props.auth
    let params = props.params
    
    if (!props.loaded) {
        return <div></div>;
    } else {
        return (
            <Route render={props => (
                <div>
                    {!auth && <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />}
                    <Component {...{params}} />
                </div>
            )}/>
        )
    }
}

export default PrivateRoute