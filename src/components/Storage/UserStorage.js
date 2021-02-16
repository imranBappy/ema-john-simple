import React, { createContext, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const UserContext = createContext()
const UserStorage = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        img: '',
        isLoggedIn: false,
        message: '',
        error: false,
        success: false,
        newUser: true
    })
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Header />
            <div className="container mt-4">
                {user.success &&
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        {user.message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                {user.error &&
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        {user.message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
            </div>


            {
                props.children
            }
            <Footer />
        </UserContext.Provider >
    );
};

export default UserStorage;