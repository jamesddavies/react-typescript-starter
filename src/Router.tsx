import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import PageTwo from './components/PageTwo'

import './scss/Global.scss'

const Router: React.SFC<{}> = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pagetwo" component={PageTwo} />
        </Switch>
    </BrowserRouter>
)

export default Router