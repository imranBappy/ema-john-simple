import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../Storage/UserStorage';

const PrivateRoute = ({ children, ...rest }) => {
    const [user] = useContext(UserContext)
    const { isLoggedIn } = user

    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    isLoggedIn ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/auth",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </>
    );
};

export default PrivateRoute;