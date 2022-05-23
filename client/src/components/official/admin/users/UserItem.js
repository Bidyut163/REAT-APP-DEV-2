import React from 'react';
import { connect } from 'react-redux';

const UserItem = ({ user: { firstName, lastName, id, email, role } }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{role}</td>
            <td>{email}</td>
        </tr>
    );
};

export default connect(null, {})(UserItem);
