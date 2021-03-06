import React, { useContext } from 'react';
import { UserContext } from '../Storage/UserStorage';
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Login = ({ handelSingin }) => {

    const [user, setUser] = useContext(UserContext)
    const handelFrom = e => {
        let name = e.target.id, value = e.target.value
        let isValid;
        if (name === 'email') {
            isValid = re.test(String(value).toLowerCase());
        } else if (name === 'password') {
            isValid = value.length > 4
        } else if (name === 'name') {
            isValid = value.length > 1
        } else { isValid = false }

        if (isValid) {
            setUser({ ...user, [name]: value })
        }
    }

    return (
        <>
            <h2>Login Form</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input onBlur={handelFrom} type="email" className="form-control" id="email" placeholder="Enter Your Email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input onBlur={handelFrom} type="password" className="form-control" id="password" placeholder="Enter Your Password" />
            </div>
            <button onClick={handelSingin} className='btn btn-primary my-4'>Login</button>
        </>
    );
};

export default Login;