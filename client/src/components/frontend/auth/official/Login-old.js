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
        return <Redirect to="/official/receptionist/dashboard" />;
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header">
                                <h3 className="text-center font-weight-light my-4">
                                    Official Login
                                </h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputEmail"
                                            type="email"
                                            placeholder="name@example.com"
                                            name="email"
                                            value={email}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <label htmlFor="inputEmail">
                                            Email address
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputPassword"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <label htmlFor="inputPassword">
                                            Password
                                        </label>
                                    </div>
                                    {/* <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        id="inputRememberPassword"
                                        type="checkbox"
                                        value=""
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="inputRememberPassword"
                                    >
                                        Remember Password
                                    </label>
                                </div> */}
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <a
                                            className="small"
                                            href="password.html"
                                        >
                                            Forgot Password?
                                        </a>
                                        <button className="btn btn-primary">
                                            Login
                                        </button>
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
