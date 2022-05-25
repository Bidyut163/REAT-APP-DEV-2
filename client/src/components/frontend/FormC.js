import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { createAppeal } from '../../actions/appeal';

const FormC = ({ logout, createAppeal, history }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
    });

    const { firstName, lastName, addressLine1, addressLine2 } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        createAppeal(formData, history);
    };

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        REAT - REAL ESTATE APPELLATE TRIBUNAL
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Appellants
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/appellant/login"
                                    onClick={logout}
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="section-form mb-5">
                <div className="container mt-5">
                    <form className="row g-3" onSubmit={(e) => onSubmit(e)}>
                        <h5>1. Particulars of the Appellant</h5>
                        <h6>Name of the Appellant</h6>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <h6>
                            Address of the Existing Office/ Residence of the
                            Appellant
                        </h6>
                        <div className="mb-3">
                            <label htmlFor="AddLine1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="AddLine1"
                                name="addressLine1"
                                value={addressLine1}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="AddLine2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="AddLine2"
                                name="addressLine2"
                                value={addressLine2}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className="col-md-12 mb-3 ">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default connect(null, { logout, createAppeal })(withRouter(FormC));
