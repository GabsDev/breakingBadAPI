import React from 'react';

const Navigation = ({onRouteChange}) => {
    return (
        <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked">
                <a className="link dim white dib mr3" href="#" title="Home" onClick={() => onRouteChange('home')}>Home</a>
                <a className="link dim white dib mr3" href="#" title="Episodes" onClick={() => onRouteChange('episodes')}>Episodes</a>
            </nav>
        </header>
    );
}

export default Navigation;