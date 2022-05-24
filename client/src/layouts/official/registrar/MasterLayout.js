import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import routes from '../../../routes/registrar/routes';

import '../../../assets/official/css/sb-admin-2.css';

const MasterLayout = () => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div
                // style={{ marginLeft: '14rem' }}
                id="content-wrapper"
                className="d-flex flex-column"
            >
                <div id="content">
                    <Topbar />

                    <Switch>
                        {routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            );
                        })}
                        <Redirect
                            from="/official/registrar"
                            to="/official/registrar/panel"
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MasterLayout;
