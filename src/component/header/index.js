import React from 'react'
import PropTypes from 'prop-types'
 import './styles.scss';

import logo from '../../logo.svg';


export const Header = () => {
    return (
        <header className='headerComponent'>
            <div className="wrap">
                <div className="logo">
                    <img className='logoPNG' src={logo} alt='logo'/>
                </div>
            </div>
        </header>
    )
}


export default Header;
