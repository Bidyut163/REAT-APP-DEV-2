import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-primary min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div
                            class="card"
                            // style={{
                            //     backgroundColor: '#575fcf',
                            //     color: 'white',
                            // }}
                        >
                            <div class="card-body">
                                <h5 class="card-title">Appellant Login</h5>
                                <p class="card-text">
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
                    <div class="col-sm-6">
                        <div
                            class="card"
                            style={{
                                backgroundColor: '#05c46b',
                                color: 'white',
                            }}
                        >
                            <div class="card-body">
                                <h5 class="card-title">Govt Login</h5>
                                <p class="card-text">
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
