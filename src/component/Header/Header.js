import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='navigation'>
           <img src={logo} alt=''/>
           <div className=''>
                <a href='#'>Shop</a>
                <a href='#'>Orders</a>
                <a href='#'>Inventory</a>
                <a href='#'>About</a>
           </div>
        </nav>
    );
};

export default Header;