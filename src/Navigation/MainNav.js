import { NavLink, Link } from 'react-router-dom'

import './MainNav.css';

const MainNav = () => {
    return (
        <nav class="navbar">

            <a class="logo" href="#">Memory Verse</a>

            <ul class="nav-links">

                <input type="checkbox" id="checkbox_toggle" />

                <label for="checkbox_toggle" class="hamburger">&#9776;</label>

                <div class="menu">

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/bible'>Bible</Link></li>
                    <li><Link to='/notes'>Notes</Link></li>
                    <li><Link to='/videos'>Videos</Link></li>

                </div>
            </ul>
        </nav >
    )
};

export default MainNav;