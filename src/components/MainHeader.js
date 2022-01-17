import React from 'react';
import Logotype from './Logotype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



const MainHeader = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <Logotype></Logotype>
            </div>
            <div className='header__container'>
                <Link to="/HomePage">
                    <FontAwesomeIcon icon={faHome} className='header__icon' />
                </Link>
                <FontAwesomeIcon icon={faHeart} className='header__icon' />
                <FontAwesomeIcon icon={faUser} className='header__icon' />
            </div>
        </div>
    )
}

export default MainHeader; 