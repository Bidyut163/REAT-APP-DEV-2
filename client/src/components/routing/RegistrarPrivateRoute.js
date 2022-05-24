import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

import MasterLayout from '../../layouts/official/registrar/MasterLayout';

const RegistrarPrivateRoute = ({
    loadUser,
    auth: { isAuthenticated, loading, user },
    ...rest
}) => {
    useEffect(() => {
        loadUser();
    }, [loadUser]);

    if (loading) {
        return <h1>Loaing...</h1>;
    }

    return isAuthenticated && user && user.role === 'REGISTRAR' ? (
        <Route {...rest} render={(props) => <MasterLayout {...props} />} />
    ) : (
        <Redirect to="/official/login" />
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { loadUser })(RegistrarPrivateRoute);
