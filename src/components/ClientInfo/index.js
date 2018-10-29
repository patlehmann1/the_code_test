import React from 'react';
import './ClientInfo.css';
import Spinner from './../Spinner';

const ClientInfo = props => {
    return (
        <div className="data-wrapper">
            {!props.paymentData.length ? (
                <Spinner />
            ) : (
                    props.paymentData.map((data, index) => (
                        <div className="list-results text-dark" key={index}>
                            <div className="list-column row">
                                <div className="col-lg-6 col-sm-12">
                                    <h2 className="payee_info"><i className="fas fa-user"></i>
                                        Payee Information</h2>
                                    <hr />
                                    <p className="group-heading">Company Name:</p>
                                    <p className="group-item">{data.Payee.Name}</p>
                                    <p className="group-heading">Contact Information:</p>
                                    <p className="group-item">Fax #: {data.Payee.Fax}</p>
                                    <p className="group-item">Telephone #: {data.Payee.Phone}</p>
                                    <p className="group-heading">Mailing Address:</p>
                                    <p className="group-item">{data.Payee.Address.Address1}</p>
                                    <p className="group-item">
                                    {data.Payee.Address.City}, {data.Payee.Address.StateOrProvince}, {data.Payee.Address.Country}
                                    </p>
                                    <p className="group-heading">Attention:</p>
                                    <p className="group-item">{data.Payee.Attention}</p>
                                    <p className="group-heading">Date Added:</p>
                                    <p className="group-item">{data.Payee.SubmissionDate}</p>
                                </div>
                                <div className="list-column col-lg-6 col-xs-12">
                                    <h2 className="payee_info"><i className="fas fa-credit-card"></i> Payment Information</h2>
                                    <hr />
                                    <p className="group-heading">
                                        PAN #:
                            </p>
                                    <p className="group-item">
                                        {data.Payment.PAN}
                                    </p>
                                    <p className="group-heading">
                                        CVV #:
                            </p>
                                    <p className="group-item">
                                        {data.Payment.CVV}
                                    </p>
                                    <p className="group-heading">
                                        Expiration Date:
                            </p>
                                    <p className="group-item">
                                        {data.Payment.Exp}
                                    </p>
                                </div>
                            </div>
                            <div className="list-column row">
                                <div className="col-lg-12 col-sm-12">
                                    <h2 className="payee_info"><i className="fas fa-file-invoice"></i> Remittance(s)</h2>
                                </div>
                            </div>
                            <div className="row">
                                {data.Remittance.map((remitData, index) => (
                                    <div className="col-lg-12 col-sm-12" key={index}>
                                        <hr />
                                        <p className="group-heading">
                                            Payor Name:
                                </p>
                                        <p className="group-item">
                                            {remitData.PayorName}
                                        </p>
                                        <p className="group-heading">
                                            Payor ID #:
                                </p>
                                        <p className="group-item">
                                            {remitData.PayorId}
                                        </p>
                                        <p className="group-heading">
                                            Invoice #:
                                </p>
                                        <p className="group-item">
                                            {remitData.InvoiceNo}
                                        </p>
                                        <p className="group-heading">
                                            Description:
                                </p>
                                        <p className="group-item">
                                            {remitData.Description}
                                        </p>
                                        <p className="group-heading">
                                            Amount:
                                </p>
                                        <p className="group-item">
                                            {remitData.Amount}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
        </div>
    );
};

export default ClientInfo;