import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUserAppellant } from '../../actions/auth';

const AppellantPrivateRoute = ({
    loadUserAppellant,
    component: Component,
    auth: { isAuthenticated, userType, loading },
    ...rest
}) => {
    useEffect(() => {
        loadUserAppellant();
    }, [loadUserAppellant]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return isAuthenticated && userType === 'APPELLANT' ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
        <Redirect to="/appellant/login" />
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { loadUserAppellant })(
    AppellantPrivateRoute
);

// return (
//     <Route
//         {...rest}
//         render={(props) =>
//             !isAuthenticated && userType === 'APPELLANT' ? (
//                 <Redirect to="/appellant/login" />
//             ) : (
//                 <Component {...props} />
//             )
//         }
//     />
// );
