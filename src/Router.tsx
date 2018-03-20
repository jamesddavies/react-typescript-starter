import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router: React.SFC<{}> = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={} />
            <Route path="/pagetwo" component={} />
        </Switch>
    </BrowserRouter>
)

export default Router