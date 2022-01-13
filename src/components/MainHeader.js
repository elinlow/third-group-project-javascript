import React from 'react';
import Logotype from './Logotype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";



const MainHeader = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <Logotype></Logotype>
            </div>
            <div className='header__container'>
                <FontAwesomeIcon icon={faHome} className='header__icon' />
                <FontAwesomeIcon icon={faHeart} className='header__icon' />
                <FontAwesomeIcon icon={faUser} className='header__icon' />
            </div>
        </div>
    )
}

export default MainHeader; 