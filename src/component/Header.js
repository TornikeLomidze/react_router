import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="header" >
                <NavLink exact to='/' className='nav_item'>Home</NavLink>
                <NavLink to='/about' className='nav_item'>About</NavLink>
                <NavLink to='/new' className='nav_item'>New</NavLink>

                <h1 className='title'> Happy old Year </h1>

            </div>
        </div>
    );
};

export default Header;
