import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebaseConfig';


export const LoginAPI = async (email, password) => {
    try {
        let response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch (err) {
        
        return err;
    }
};

export const RegisterAPI = (email, password) => {
    try {
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    } catch (err) {
        return err;
    }
};

export const GoogleSignInAPI = async(email, password) => {
    try {
        let googleProvider = new GoogleAuthProvider();
        let res = await signInWithPopup(auth, googleProvider)
        return res

    } catch (err) {
        return err;
    }
}