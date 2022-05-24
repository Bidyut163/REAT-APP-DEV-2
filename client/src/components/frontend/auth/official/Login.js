import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../../actions/auth';

const Login = ({ login, auth: { isAuthenticated, user } }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    // Redirect if Logged in and Admin
    if (isAuthenticated && user && user.role === 'ADMIN') {
        return <Redirect to="/official/admin/dashboard" />;
    }

    // Redirect if Logged in and Receptionist
    if (isAuthenticated && user && user.role === 'RECEPTIONIST') {
        return <Redirect to="/official/receptionist/panel" />;
    }

    // Redirect if Logged in and Registrar
    if (isAuthenticated && user && user.role === 'REGISTRAR') {
        return <Redirect to="/official/registrar/panel" />;
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-4 mx-4">
                            <div className="card-body p-4">
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <h1>Govt Login</h1>
                                    <p className="text-medium-emphasis">
                                        Sign In to your account
                                    </p>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-user"></i>
                                            {/* <svg className="icon">
                                                <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>
                                            </svg> */}
                                        </span>
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-lock"></i>
                                            {/* <svg className="icon">
                                                <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked"></use>
                                            </svg> */}
                                        </span>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button
                                                className="btn btn-primary px-4"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button
                                                className="btn btn-link px-0"
                                                type="button"
                                            >
                                                Forgot password?
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { login })(Login);
