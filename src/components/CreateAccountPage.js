import React from 'react';
import MainHeader from './MainHeader';
import CreateAccount from './CreateAccount';
import img from '../assets/user-img-2.png';
import { Link } from "react-router-dom";


const CreateAccontPage = () => {

    return (

        <div>
            <MainHeader/>
            <div>
                <h2 className='headline-2 pt-5'>Create Account</h2>
            </div>
            <CreateAccount />
            <Link to="/" className='Path'>
                <h2 className='headline-3 pt-5'>Cancel</h2>
            </Link>
            <div className='footer-account'>
                <img src={img} alt='Mountains' className='footer-img'></img>
            </div>
        </div>
    )
}

export default CreateAccontPage;