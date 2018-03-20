import * as React from 'react'
import '../../scss/Loader.scss'
var LoaderImage = require('../../img/Loader.png')

const Loader: React.SFC<{}> = () => {
    return (
        <div className="_loader ">
            <img src={LoaderImage} />
            <p>Loading...</p>
        </div>
    )
}

export default Loader;