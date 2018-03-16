import * as React from 'react';

interface LayoutProps {
    children?: any
}

const Layout = (props: LayoutProps) => (
    <div className="layout-container">
        <header>
                
        </header>
            {props.children}
        <footer>

        </footer>
    </div>
)