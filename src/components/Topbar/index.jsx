import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Topbar() { // surfer nav bar
    let navigate = useNavigate();

    const goToRoute = (route) => {
        navigate(route)
    }

    return (
        <div className='header-nav'>
            <div className='left-section'>
                <h1 className='title'>CCNY Connect!</h1>
            </div>
            <div className='middle-section'>
                <ul className='nav_items'>
                    <li className='nav-item' onClick={() => goToRoute('/home')}>Home</li>
                    <li className='nav-item'>Learn</li>
                    <li className='nav-item'>About</li>
                </ul>
            </div>
            <div className='right-section'>
                <button className='signup-btn' onClick={() => goToRoute('/register')}>Signup</button>
            </div>
        </div>
      
    );

}
