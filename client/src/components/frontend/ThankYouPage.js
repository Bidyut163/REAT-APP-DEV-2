import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const ThankYouPage = ({ logout }) => {
    return (
        <div className="container-fluid">
            <div className="text-center">
                <div className="error mx-auto">Thank You</div>
                <p className="lead text-gray-800 mb-5">
                    Your Application is Submitted
                </p>
                <p className="text-gray-500 mb-0">
                    To create a new Appeal click below
                </p>

                <Link to="/appellant/formC">&larr; create a new appeal</Link>

                <p className="text-gray-500 mb-0">
                    Please click below to logout
                </p>

                <Link onClick={logout} to="/appellant/login">
                    &larr; logout
                </Link>
            </div>
        </div>
    );
};

export default connect(null, { logout })(ThankYouPage);
