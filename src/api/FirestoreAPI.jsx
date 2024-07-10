import { firestore } from "../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"


let dbRef = collection(firestore, 'posts');


export const PostStatusFirebase = (status) => {
    let object = {
        content: status,
    };
    addDoc(dbRef, object)
        .then((res) => {
            console.log('doc has been added')
        })
        .catch((error) => {
            console.log(error)
        })
}