import React from 'react';
import MainHeader from './MainHeader';
import LogIn from './LogIn';
import img from '../assets/user-img-2.png';


const LogInPage = () => {

    return (

        <div>
            <MainHeader/>
            <div>
                <h2 className='headline-2 pt-5'>Login</h2>
            </div>
            <LogIn />
            <div className='footer-account pt-5'>
                <img src={img} alt='Mountains' className='footer-img'></img>
            </div>

        </div>
    )
}

export default LogInPage;