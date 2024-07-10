import React from 'react'
import RegisterComponent from '../components/RegisterComponent';
import { LoginAPI } from '../api/AuthAPI';
import Topbar from '../components/Topbar';


export default function Register() {
  return ( 
    <>
  <Topbar className="register-nav"/>
  <RegisterComponent />
  </>
  )
}
