import React, { useContext } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { UserContext } from '../Storage/UserStorage';
import { useHistory, useLocation } from 'react-router-dom';
import { singInWithGoogle, handelSignupFrom, handelSinginFrom, handelLogoutAll } from './authManager';

const Auth = () => {
    const [user, setUser] = useContext(UserContext)
    let { name, email, password } = user
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const history = useHistory()
    //login with google

    const googleSingin = () => {
        singInWithGoogle().then(result => {
            setUser({ ...user, ...result })
            history.replace(from)
        })
    }
    // from signup 

    const handelSignup = () => {
        handelSignupFrom(name, email, password).then(result => { setUser({ ...user, ...result }) })
    }

    // form handel singin
    const handelSingin = () => {
        handelSinginFrom(email, password).then(result => {
            setUser({ ...user, ...result })
            history.replace(from.pathname)
        })
    }
    //logout
    const handelLogout = () => handelLogoutAll().then(result => { setUser({ ...user, ...result }) })


    return (
        <>
            <div className="container mt-5">
                {user.newUser ? <SignUp handelSignup={handelSignup} /> : <Login handelSingin={handelSingin} />}
                <p
                    onClick={() => setUser({ ...user, newUser: !user.newUser })}
                    style={{ cursor: 'pointer' }}
                    className='text-center'
                >I Am {user.newUser ? 'Old' : 'New'} User</p>
                <br />
                <button
                    onClick={user.isLoggedIn ? handelLogout : googleSingin}
                    className={user.isLoggedIn ? 'btn btn-danger' : 'btn btn-primary'}>
                    {user.isLoggedIn ? 'Logout ' : 'Singin With Google'}
                </button>

            </div>
        </>
    );
};

export default Auth;



