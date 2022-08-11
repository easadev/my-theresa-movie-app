import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return <header>
        <div className="header-title">MyTheresa Movie</div>
        <ul className="header-links">
            <li><Link to='/' className="header-links__link">Home</Link></li>
            <li><Link to='/wish-list' className="header-links__link">Wish List</Link></li>
        </ul>
    </header >
}