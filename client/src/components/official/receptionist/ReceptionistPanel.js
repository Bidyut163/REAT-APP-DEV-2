import React, { useEffect } from 'react';
import AppealItem from './AppealItem';
import { getAppeals } from '../../../actions/appeal';
import { connect } from 'react-redux';

const ReceptionistPanel = ({ getAppeals, appeal: { appeals, loading } }) => {
    useEffect(() => {
        getAppeals();
    }, [getAppeals]);
    return loading ? (
        <div>loading</div>
    ) : (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">All Appeals</h1>
            <p className="mb-4">List of all new appeals</p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Appeals Table
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
                                    <th>Address</th>
                                    <th>View</th>
                                </tr>
                            </thead>

                            <tbody>
                                {appeals.map((appeal) => (
                                    <AppealItem
                                        key={appeal.id}
                                        appeal={appeal}
                                    />
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
    return { appeal: state.appeal };
};

export default connect(mapStateToProps, { getAppeals })(ReceptionistPanel);
