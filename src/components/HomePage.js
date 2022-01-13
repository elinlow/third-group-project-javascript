import userImg from '../assets/user-img.png';
import ProfilePic from '../assets/profile-picture.png';
import PicTag from './CreatePicTag';
import React from 'react';
import MainHeader from './MainHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";



const HomePage = () => {
    return (
        <div className='home-page'>
            <MainHeader></MainHeader>
            <div className='user-img'>
                <img className='img-fluid' src={userImg} alt="User"></img>
            </div>
            <div className='img-info'>
                <div className='user-info'>
                    <img className='img-fluid profile-pic' src={ProfilePic} alt='User'></img>
                    <h2 className='username'>Username</h2>
                </div>
                <div>
                    <PicTag></PicTag>
                    <FontAwesomeIcon icon={faHeart} className='header__icon' />
                    <FontAwesomeIcon icon={faComment} className='header__icon' />
                </div>
            </div>
            
        </div>
    )
}

export default HomePage; 