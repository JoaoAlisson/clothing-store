import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClowI1eQeksqbTQsu8rMBRdj4XzZhneYQ",
    authDomain: "clothing-store-1780c.firebaseapp.com",
    databaseURL: "https://clothing-store-1780c.firebaseio.com",
    projectId: "clothing-store-1780c",
    storageBucket: "clothing-store-1780c.appspot.com",
    messagingSenderId: "853911286216",
    appId: "1:853911286216:web:d28ac3c49657abdc1e10fd",
    measurementId: "G-TSWTFEWMPP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('Erro creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;