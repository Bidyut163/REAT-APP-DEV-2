import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-primary min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div
                            className="card"
                            // style={{
                            //     backgroundColor: '#575fcf',
                            //     color: 'white',
                            // }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Appellant Login</h5>
                                <p className="card-text">
                                    To Create A New Appeal Please Login as an
                                    Appellant
                                </p>
                                <Link
                                    to="/appellant/login"
                                    className="btn btn-primary"
                                >
                                    Appellant Login
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div
                            className="card"
                            style={{
                                backgroundColor: '#05c46b',
                                color: 'white',
                            }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Govt Login</h5>
                                <p className="card-text">
                                    For officials Please login
                                </p>
                                <Link
                                    to="/official/login"
                                    className="btn btn-primary"
                                >
                                    Govt Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
