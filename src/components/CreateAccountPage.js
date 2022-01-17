import React from 'react';
import MainHeader from './MainHeader';
import CreateAccount from './CreateAccount';
import img from '../assets/user-img-2.png';


const CreateAccontPage = () => {

    return (

        <div>
            <MainHeader/>
            <div>
                <h2 className='headline-2 pt-5'>Create Account</h2>
            </div>
            {<CreateAccount />}
            <div className='footer-account pt-5'>
                <img src={img} alt='Mountains' className='footer-img'></img>
            </div>

        </div>
    )
}

export default CreateAccontPage;