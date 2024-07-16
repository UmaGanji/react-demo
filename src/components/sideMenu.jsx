import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/questions" activeclassname="active">Questions</NavLink></li>
                <li><NavLink to="/tags" activeclassname="active">Tags</NavLink></li>
            </ul>
        </nav>
    )
}
export default Sidebar;