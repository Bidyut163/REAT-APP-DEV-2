import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../../actions/user';

import UserItem from './UserItem';

const Users = ({ getUsers, user: { users, loading } }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return loading ? (
        <div>loading</div>
    ) : (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">All Users</h1>
            <p className="mb-4">List of all users except Admin</p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Users Table
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                        >
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Email</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user) => (
                                    <UserItem key={user.id} user={user} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { getUsers })(Users);
