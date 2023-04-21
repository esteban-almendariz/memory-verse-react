import { NavLink } from 'react-router-dom'

import './MainNav.css';

const MainNav = () => {
    return (
        <nav class="navbar">

            <a class="logo" href="#">Memory Verse</a>

            <ul class="nav-links">

                <input type="checkbox" id="checkbox_toggle" />

                <label for="checkbox_toggle" class="hamburger">&#9776;</label>

                <div class="menu">

                    <li><a >Home</a></li>
                    <li><a >Bible</a></li>
                    <li><a >Notes</a></li>
                    <li><a >Videos</a></li>
                    <li>
                        <NavLink to='/videos' >Videos</NavLink>
                    </li>

                </div>
            </ul>
        </nav >
    )
};

export default MainNav;