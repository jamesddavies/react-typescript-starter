import * as React from 'react'

interface LayoutProps {
    children?: any
}

const Layout: React.SFC<LayoutProps> = (props: LayoutProps) => (
    <div className="layout-container">
        <header>
            header
        </header>
            {props.children}
        <footer>
            footer
        </footer>
    </div>
)

export default Layout