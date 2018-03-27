import * as React from 'react'

interface LayoutProps {
    children?: any
}

const Layout: React.SFC<LayoutProps> = (props: LayoutProps) => (
    <div className="layout-container">
        <header>
            <div className="overlay"></div>
            <h1>React TypeScript Starter</h1>
        </header>
        <section className="page-content">
            {props.children}
        </section>
        <footer>
            This is the footer
        </footer>
    </div>
)

export default Layout