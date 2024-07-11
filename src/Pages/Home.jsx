import React, {useEffect, useState} from 'react'
import Homecomponent from '../components/Homecomponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';


export default function Home() {
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(!res?.accessToken) {
                navigate('/home')
            } else {
                setLoading(false)
            }
        });
    }, []);
  return loading ? <Loader/> : <Homecomponent />
}
