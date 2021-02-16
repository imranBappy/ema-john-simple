import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./config";

//login with google

const provider = new firebase.auth.GoogleAuthProvider();
export const singInWithGoogle = () => {
    return firebase.auth().signInWithPopup(provider).then((result) => {
        const { displayName, email, photoURL } = result.user
        return userInfoFormat(displayName, email, photoURL)
        // history.replace(from)
    }).catch((err) => {
        return handelErrorFormat(err.message)
    })
}

export const handelSignupFrom = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        updateInfo(name)
        return { message: 'Successfully Signup', newUser: false, isLoggedIn: true, success: true }
    }).catch(err => {
        return { ...handelErrorFormat(err.message) }
    })
}

export const handelSinginFrom = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var { displayName, email, photoURL } = userCredential.user;
            return { ...userInfoFormat(displayName, email, photoURL) }
        })
        .catch((error) => {
            return {
                message: error.message,
                error: true,
                success: false
            }
        });
}

export const handelLogoutAll = () => {
    return firebase.auth().signOut().then(() => {
        return { name: '', email: '', img: '', isLoggedIn: false, message: 'Successfully Logout!', success: true }
    }).catch((error) => {
        return {
            message: error.message,
            error: true,
            success: false
        }
    });
}


function handelErrorFormat(mes) {
    return {
        message: mes,
        error: true,
        success: false
    }
}
function updateInfo(name) {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
        photoURL: "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"
    }).then(() => { }).catch(function (error) { })
}


function userInfoFormat(name, email, img) {
    return {
        name,
        email,
        img,
        isLoggedIn: true,
        message: 'Successfully Login!',
        success: true
    }
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}