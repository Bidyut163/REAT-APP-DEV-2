import React from 'react';
import { Link } from 'react-router-dom';

const AppealItem = ({
    appeal: { id, firstName, lastName, addressLine1, addressLine2 },
}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{`${addressLine1} ${addressLine2}`}</td>
            <td>
                <Link
                    to={`/official/receptionist/appeals/${id}`}
                    className="btn btn-primary"
                >
                    View
                </Link>
            </td>
        </tr>
    );
};

export default AppealItem;
