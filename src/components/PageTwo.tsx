import * as React from 'react'
import Layout from './util/Layout'
import { NavLink } from 'react-router-dom'

const PageTwo: React.SFC<{}> = () => (
    <Layout>
        <h2>This is page two!</h2>
        <p>Click <NavLink to="/">here</NavLink> to go back to the home page.</p>
    </Layout>
)

export default PageTwo