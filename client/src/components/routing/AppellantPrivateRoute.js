import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AppellantPrivateRoute = ({
    component: Component,
    auth: { isAuthenticated, userType },
    ...rest
}) => {
    if (!isAuthenticated) {
        return <Redirect to="/appellant/login" />;
    }

    if (isAuthenticated && userType !== 'APPELLANT') {
        return <Redirect to="/appellant/login" />;
    }
    return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(AppellantPrivateRoute);

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
