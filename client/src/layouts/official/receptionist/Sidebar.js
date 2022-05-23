import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidebar = () => {
    return (
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to="index.html"
            >
                <div className="sidebar-brand-icon rotate-n-15">
                    {/* <i className="fas fa-laugh-wink"></i> */}
                    <i className="fa-solid fa-lock"></i>
                </div>
                <div className="sidebar-brand-text mx-3">REAT Assam</div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/official/admin/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Receptionist</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Master</div>

            <li className="nav-item">
                <Link
                    className="nav-link collapsed"
                    to="#"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Appeals</span>
                </Link>
                <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link
                            className="collapse-item"
                            to="/official/receptionist/appeals"
                        >
                            All Appeals
                        </Link>
                        <Link
                            className="collapse-item"
                            to="/official/admin/users"
                        >
                            View
                        </Link>
                    </div>
                </div>
            </li>

            {/* <li className="nav-item">
                <Link
                    className="nav-link collapsed"
                    to="#"
                    data-toggle="collapse"
                    data-target="#collapseUtilities"
                    aria-expanded="true"
                    aria-controls="collapseUtilities"
                >
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </Link>
                <div
                    id="collapseUtilities"
                    className="collapse"
                    aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Link className="collapse-item" to="/admin/colors">
                            Colors
                        </Link>
                        <Link className="collapse-item" to="/admin/borders">
                            Borders
                        </Link>
                        <Link className="collapse-item" to="/admin/animations">
                            Animations
                        </Link>
                        <Link className="collapse-item" to="/admin/others">
                            Other
                        </Link>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Addons</div>

            <li className="nav-item">
                <Link
                    className="nav-link collapsed"
                    to="#"
                    data-toggle="collapse"
                    data-target="#collapsePages"
                    aria-expanded="true"
                    aria-controls="collapsePages"
                >
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </Link>
                <div
                    id="collapsePages"
                    className="collapse"
                    aria-labelledby="headingPages"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <Link className="collapse-item" to="/login">
                            Login
                        </Link>
                        <Link className="collapse-item" to="/register">
                            Register
                        </Link>
                        <Link className="collapse-item" to="/forgot-password">
                            Forgot Password
                        </Link>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <Link className="collapse-item" to="404.html">
                            404 Page
                        </Link>
                        <Link className="collapse-item" to="blank.html">
                            Blank Page
                        </Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/charts">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/tables">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span>
                </Link>
            </li> */}

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                ></button>
            </div>

            {/* <div className="sidebar-card d-none d-lg-flex">
                <img
                    className="sidebar-card-illustration mb-2"
                    src={
                        require('../../assets/official/img/undraw_rocket.svg')
                            .default
                    }
                    alt="..."
                />
                <p className="text-center mb-2">
                    <strong>Admin Panel-</strong> React Admin UI Project
                </p>
                <Link
                    className="btn btn-success btn-sm"
                    to="https://startbootstrap.com/theme/sb-admin-pro"
                >
                    Upgrade to Pro!
                </Link>
            </div> */}
        </ul>
    );
};

export default connect(null)(Sidebar);
