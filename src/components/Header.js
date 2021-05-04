import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo1.jpeg';

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img
                    className='header__logo'
                    src={logo}
                    alt='logo'
                />
            </Link>
            <div className='header__nav'>
                <Link to='/crop'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Crop Prediction</span>
                    </div>
                </Link>
                <Link to='/production'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Crop Yield Prediction</span>
                    </div>
                </Link>
               
            </div>
        </div>
    )
}

export default Header
