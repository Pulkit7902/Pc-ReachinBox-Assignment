import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, getDoc, doc, updateDoc, getDocs, collection, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithEmailAndPassword, sendEmailVerification, signOut,signInWithPopup ,OAuthProvider} from "firebase/auth";
// import { generatePassword, randomNumber } from './modules/random';
const firebaseConfig = {
    apiKey: "AIzaSyAAN-tB2YYQ6C_0psM8RnWIznGRb6ZQFdY",
    authDomain: "reachinbox-25488.firebaseapp.com",
    projectId: "reachinbox-25488",
    storageBucket: "reachinbox-25488.appspot.com",
    messagingSenderId: "1022149075829",
    appId: "1:1022149075829:web:239400efc05879f6cb693c",
    measurementId: "G-CMJX1PZZ2E"
};
const app = initializeApp(firebaseConfig);
getAnalytics(app)
const db = getFirestore(app);


export const auth = getAuth()


export async function signupUser(email, password) {
    try {
        localStorage.setItem('auth-type', 'user')
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(userCredential.user);
        return { success: true }
    } catch (error) {
        localStorage.removeItem('auth-type')
        return { success: false, error: error.code || 'Some error occured...' }
    }
}
