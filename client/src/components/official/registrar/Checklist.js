import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChecklist, getChecklist } from '../../../actions/checklist';

const Checklist = ({
    createChecklist,
    getChecklist,
    match,
    history,
    checklist: { checklist },
}) => {
    useEffect(() => {
        const { id } = match.params;
        getChecklist(id);
    }, [getChecklist]);

    const [formData, setFormData] = useState({
        appealNum: '',
        complaintNum: '',
        appellant: '',
        respondent: '',
    });

    const { appealNum, complaintNum, appellant, respondent } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { id } = match.params;
        createChecklist(
            { appealNum, appellant, complaintNum, respondent },
            id,
            history
        );
    };

    if (checklist) {
        return (
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Checklist - FORM A</h1>
                <p className="mb-4">Checklist for Scrutiny Appeal</p>
                <div className="card shadow mb-4">
                    <div className="card-header py-3"></div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-12">
                                <h4>
                                    <label htmlFor="FORM A">
                                        <b>FORM A</b>
                                    </label>
                                </h4>
                            </div>

                            <div className="col-12">
                                <h4>
                                    <label htmlFor="CHECKLIST FOR SECURITY APPEAL">
                                        <b>CHECKLIST FOR SECURITY APPEAL</b>
                                    </label>
                                </h4>
                            </div>

                            <form
                                className="row g-4"
                                onSubmit={(e) => onSubmit(e)}
                            >
                                <div className="col-md-2">
                                    <label
                                        htmlFor="appealNum"
                                        className="form-label"
                                    >
                                        <b>Appeal No.</b>
                                    </label>
                                </div>

                                <div className="col-md-4">
                                    <h6>{checklist.appeal_num}</h6>
                                </div>

                                <div className="col-md-2">
                                    <label
                                        htmlFor="complaintNum"
                                        className="form-label"
                                    >
                                        <b>Complaint No.</b>
                                    </label>
                                </div>

                                <div className="col-md-4">
                                    <h6>{checklist.complaint_num}</h6>
                                </div>

                                <div className="col-md-2">
                                    <label className="form-label">
                                        <b>Parties:</b>
                                    </label>
                                </div>

                                <div className="col-md-10">
                                    <h6>{checklist.appellant}</h6>
                                </div>

                                <div className="col-md-2">
                                    <label className="form-label">
                                        <b>Vs</b>
                                    </label>
                                </div>

                                <div className="col-md-10">
                                    <h6>{checklist.respondent}</h6>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-primary btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-flag"></i>
                                        </span>
                                        <span className="text">
                                            Edit Form A
                                        </span>
                                    </button>
                                    <div className="my-2"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Checklist - FORM A</h1>
            <p className="mb-4">Checklist for Scrutiny Appeal</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3"></div>
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-12">
                            <h4>
                                <label htmlFor="FORM A">
                                    <b>FORM A</b>
                                </label>
                            </h4>
                        </div>

                        <div className="col-12">
                            <h4>
                                <label htmlFor="CHECKLIST FOR SECURITY APPEAL">
                                    <b>CHECKLIST FOR SECURITY APPEAL</b>
                                </label>
                            </h4>
                        </div>

                        <form className="row g-4" onSubmit={(e) => onSubmit(e)}>
                            <div className="col-md-2">
                                <label
                                    htmlFor="appealNum"
                                    className="form-label"
                                >
                                    <b>Appeal No.</b>
                                </label>
                            </div>

                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="appealNum"
                                    name="appealNum"
                                    value={appealNum}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-2">
                                <label
                                    htmlFor="complaintNum"
                                    className="form-label"
                                >
                                    <b>Complaint No.</b>
                                </label>
                            </div>

                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="complaintNum"
                                    name="complaintNum"
                                    value={complaintNum}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-2">
                                <label className="form-label">
                                    <b>Parties:</b>
                                </label>
                            </div>

                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Appellants"
                                    name="appellant"
                                    value={appellant}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-2">
                                <label className="form-label">
                                    <b>Vs</b>
                                </label>
                            </div>

                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Respondent"
                                    name="respondent"
                                    value={respondent}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-12">
                                <button className="btn btn-success btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span className="text">Submit Form A</span>
                                </button>
                                <div className="my-2"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { checklist: state.checklist };
};

export default connect(mapStateToProps, { createChecklist, getChecklist })(
    withRouter(Checklist)
);
