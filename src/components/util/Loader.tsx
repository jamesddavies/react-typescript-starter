import * as React from 'react';
import '../../scss/Loader.scss';
var Logo = require('../../img/Logo.png');

interface LoaderProps {
    placement?: "full-page" | "partial-page"
}

const Loader = (props: LoaderProps) => {
    return (
        <div className={"_loader " + (props.placement ? props.placement : "full-page")}>
            <img src={Logo} />
            <p>Loading...</p>
        </div>
    )
}

export default Loader;