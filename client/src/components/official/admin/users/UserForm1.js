import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../../../../actions/user';

class UserForm1 extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        role: '',
        errors: [],
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            role: this.state.role,
        };

        this.props.addUser(newUser, this.props.history);
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            password2,
            role,
            errors,
        } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header">
                                <h3 className="text-center font-weight-light my-4">
                                    Create User
                                </h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={(e) => this.onSubmit(e)}>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input
                                                    className="form-control"
                                                    id="inputFirstName"
                                                    type="text"
                                                    name="firstName"
                                                    value={firstName}
                                                    onChange={(e) =>
                                                        this.onChange(e)
                                                    }
                                                    placeholder="Enter your first name"
                                                />
                                                <label htmlFor="inputFirstName">
                                                    First Name
                                                </label>
                                            </div>

                                            <div className="invalid-feedback d-block">
                                                {errors.firstName}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    className="form-control"
                                                    id="inputLastName"
                                                    type="text"
                                                    name="lastName"
                                                    value={lastName}
                                                    onChange={(e) =>
                                                        this.onChange(e)
                                                    }
                                                    placeholder="Enter your last name"
                                                />
                                                <label htmlFor="inputLastName">
                                                    Last Name
                                                </label>
                                            </div>
                                            <div className="invalid-feedback d-block">
                                                {errors.lastName}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputEmail"
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => this.onChange(e)}
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="inputEmail">
                                            Email address
                                        </label>
                                        <div className="invalid-feedback d-block">
                                            {errors.email}
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputRole"
                                            type="text"
                                            name="role"
                                            value={role}
                                            onChange={(e) => this.onChange(e)}
                                            placeholder="User Role"
                                        />
                                        {/* <select
                                            className="custom-select form-control"
                                            id="inputRole"
                                            name="role"
                                            value={role}
                                            onChange={(e) => this.onChange(e)}
                                        >
                                            {options.map((option) => {
                                                return (
                                                    <option
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </option>
                                                );
                                            })}
                                        </select> */}

                                        <label htmlFor="inputRole">
                                            User Role
                                        </label>
                                        <div className="invalid-feedback d-block">
                                            {errors.role}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input
                                                    className="form-control"
                                                    id="inputPassword"
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) =>
                                                        this.onChange(e)
                                                    }
                                                    placeholder="Create a password"
                                                />
                                                <label htmlFor="inputPassword">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="invalid-feedback d-block">
                                                {errors.password}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input
                                                    className="form-control"
                                                    id="inputPasswordConfirm"
                                                    type="password"
                                                    name="password2"
                                                    value={password2}
                                                    onChange={(e) =>
                                                        this.onChange(e)
                                                    }
                                                    placeholder="Confirm password"
                                                />
                                                <label htmlFor="inputPasswordConfirm">
                                                    Confirm Password
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-0">
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-block">
                                                Create User
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <div className="card-footer text-center py-3">
                                <div className="small">
                                    <a href="login.html">
                                        Have an account? Go to login
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
    };
};

export default connect(mapStateToProps, { addUser })(withRouter(UserForm1));
