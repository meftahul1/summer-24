import React, { useState } from 'react'
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI'
import '../Sass/LoginComponent.scss'
import { useNavigate } from 'react-router-dom'
import Ccnylogo from '../assets/ccnyLogo.jpg'
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify'

export default function LoginComponent() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const register = async () => {
        try {
            let res = await RegisterAPI(credentials.email, credentials.password)
            // console.log(res?.user);
            toast.success('Register Successfully');
            navigate('/login')
            
        } catch (err) {
            console.log(err);
            toast.error("Unable to create account");
        }
    }

    const googleSignIn = () => {
        let response = GoogleSignInAPI()
        navigate('/home');
    };
  return (
    <div className='login-wrapper'>
        <h1 className="header">CCNY Connect!</h1>
        <h2 className='sub-header'>Create an account</h2>
        <p className='login-msg'>Enter credentials to sign up</p>
        <div className="auth-inputs">
            <input type="email" className="common-input" placeholder='email@domain.com'
                onChange={(event) => 
                    setCredentials({...credentials, email: event.target.value})
                } />
            <input type="password" className="common-input" placeholder='Password'
                onChange={(event) => 
                    setCredentials({...credentials, password: event.target.value})
                } />
            
            <button className="login-btn" onClick={register}>
                 Sign Up
            </button>
        </div>
        <hr className='hr-text' data-content="or continue with" />
        
        <div className="google-btn-container">
            <GoogleButton style={{ backgroundColor: 'white', color: 'black', borderRadius: '5px', fontWeight: '400' }}
                onClick={googleSignIn}
             />
             <p className="join">Already have an account?  
                <span className='join-now' onClick={() => navigate('/login')}>&nbsp;Log In</span>
             </p>
        </div>
    </div>
  )
}
