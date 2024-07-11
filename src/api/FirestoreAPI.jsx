import { firestore } from "../firebaseConfig"
import { addDoc, collection, onSnapshot } from "firebase/firestore"


let dbRef = collection(firestore, 'posts');


export const PostStatusFirebase = (status) => {
    let object = {
        content: status, //set attribute name to content, content is a column that stores status posted by user
    };
    addDoc(dbRef, object)
        .then((res) => {
            console.log('doc has been added')
        })
        .catch((error) => {
            console.log(error)
        })
}

// export const getStatus = (setAllStatus) => {
//     onSnapshot(dbRef, (response) => {
//         setAllStatus(response.docs.map((docs) => {
//             return { ...docs.data(), id: docs.id }
//         }))
//     })
// }

export const getStatus = (setAllStatus) => {
    onSnapshot(dbRef, (response) => {
        setAllStatus(
            response.docs.map((docs) => {
                return { ...docs.data(), id: docs.id}
            })
        )
    })
}