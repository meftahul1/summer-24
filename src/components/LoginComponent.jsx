import React, { useState } from 'react'
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI'
import '../Sass/LoginComponent.scss'
import { useNavigate } from 'react-router-dom'
import Ccnylogo from '../assets/ccnyLogo.jpg'
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify'

export default function LoginComponent() {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: '', password: ''}); //review email, pass
    const [errors, setErrors] = useState({email: '', password: ''}); //review


    const login = async () => {
        if (!credentials.email || !credentials.password) {
            toast.error("Please fill in all fields");
            return;
        }
    
        try {
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success('Sign In Successfully');
            navigate('/home');
        } catch (err) {
            console.log(err);
            toast.error("Invalid Credentials");
            
        }
    }


    // const login = async () => {

    //     if (!isValid) {
    //         navigate('/');
    //         return;
    //     }

    //     try {
    //         let res = await LoginAPI(credentials.email, credentials.password);
    //         // console.log(res?.user);
    //         toast.success('Sign In Successfully');
    //         navigate('/home');
            
    //     } catch (err) {
    //         console.log(`error message: ${err}`);
    //         toast.error("Invalid Credentials");
    //     }
    // }

    const googleSignIn = () => {
        let response = GoogleSignInAPI()
        navigate('/home')
    };
  return (
    <div className='login-wrapper'>
        <h1 className="header">CCNY Connect!</h1>
        <h2 className='sub-header'>Log In</h2>
        <p className='login-msg'>Enter credentials to continue</p>
        <div className="auth-inputs">
            <input type="email" className="common-input" placeholder='email@domain.com'
                onChange={(event) => 
                    setCredentials({...credentials, email: event.target.value})
                } />
            <input type="password" className="common-input" placeholder='Password'
                onChange={(event) => 
                    setCredentials({...credentials, password: event.target.value})
                } />
            
            <button className="login-btn" onClick={login}>
                 Log In
            </button>
        </div>
        <hr className='hr-text' data-content="or continue with" />
        <div className="google-btn-container">
            <GoogleButton className='google-btn'
                onClick={googleSignIn}
             />
             <p className="join">New to the Community? 
                <span className='join-now' onClick={() => navigate('/register')}>&nbsp;Join Now</span>
             </p>
        </div>
    </div>
  )
}


