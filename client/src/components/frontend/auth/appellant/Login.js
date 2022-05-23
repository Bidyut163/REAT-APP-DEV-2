import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { appellantLogin } from '../../../../actions/auth';
import { connect } from 'react-redux';

const Login = ({ appellantLogin, auth: { isAuthenticated, userType } }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        appellantLogin(email, password);
    };

    // Redirect if Logged in and Appellant
    if (isAuthenticated && userType === 'APPELLANT') {
        return <Redirect to="/appellant/formC" />;
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card-group d-block d-md-flex row">
                            <div className="card col-md-7 p-4 mb-0">
                                <div className="card-body">
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <h1>Login</h1>
                                        <p className="text-medium-emphasis">
                                            Sign In to your account
                                        </p>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i class="fa-solid fa-user"></i>
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
                                                <i class="fa-solid fa-lock"></i>
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
                            <div className="card col-md-5 text-white bg-primary py-5">
                                <div className="card-body text-center">
                                    <div>
                                        <h2>Sign up</h2>
                                        <p>
                                            For the appellants who does not have
                                            an account here, you need to
                                            register as an appellant first.
                                            Please create your account here.
                                        </p>
                                        <Link
                                            className="btn btn-lg btn-outline-light mt-3"
                                            to="/appellant/register"
                                        >
                                            Register Now!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { appellantLogin })(Login);
