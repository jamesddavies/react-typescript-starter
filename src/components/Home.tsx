import * as React from 'react'
import Layout from './util/Layout'
import { NavLink } from 'react-router-dom'

const Home: React.SFC<{}> = () => (
    <Layout>
        <h2>This is the home page!</h2>
        <p>Click <NavLink to="/pagetwo">here</NavLink> to go to page two.</p>
        <p>To change what appears here, edit <code>src/components/Home.tsx</code> and save to reload.</p>
    </Layout>
)

export default Home