import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className="navlink">Home</NavLink></li>
                <li><NavLink to="/lazy-load-img" className="navlink">Lazy Load Img</NavLink></li>
                <li><NavLink to="/lazy" className="navlink">Lazy</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar