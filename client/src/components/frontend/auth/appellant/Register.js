import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../../../actions/auth';

const Register = ({ auth: { isAuthenticated, userType }, register }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });

    const { email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            console.log('password mismatch');
        } else {
            register({ email, password });
        }
    };

    // Redirect if Logged in and Appellant
    if (isAuthenticated && userType === 'APPELLANT') {
        return <Redirect to="/appellant/formC" />;
    }
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-4 mx-4">
                            <div className="card-body p-4">
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <h1>Register as an Appellant</h1>
                                    <p className="text-medium-emphasis">
                                        Create your account
                                    </p>
                                    {/* <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <svg className="icon">
                                                <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>
                                            </svg>
                                        </span>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </div> */}
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i class="fa-solid fa-user"></i>
                                            {/* <svg className="icon">
                                            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open"></use>
                                        </svg> */}
                                        </span>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
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
                                            placeholder="Repeat password"
                                            name="password2"
                                            value={password2}
                                            onChange={(e) => onChange(e)}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-block btn-success"
                                        type="submit"
                                    >
                                        Create Account
                                    </button>
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
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { register })(Register);
