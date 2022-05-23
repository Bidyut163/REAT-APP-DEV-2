import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MasterLayout from '../../layouts/official/receptionist/MasterLayout';

const ReceptionistPrivateRoute = ({
    auth: { isAuthenticated, user },
    ...rest
}) => {
    if (!isAuthenticated) {
        return <Redirect to="/official/login" />;
    }

    if (isAuthenticated && user && user.role !== 'RECEPTIONIST') {
        return <Redirect to="/official/login" />;
    }

    return <Route {...rest} render={(props) => <MasterLayout {...props} />} />;
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(ReceptionistPrivateRoute);
