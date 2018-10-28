import React from 'react';
import './ClientInfo.css';

const ClientInfo = props => {
    return (
        <div className="data-wrapper container">
            {props.paymentData.map((data, index) => (
                <div className="list-results text-dark row" key={index}>
                    <div className="list-column col-lg-4 col-xs-12">
                        <h2 className="payee_info"><i className="fas fa-user"></i>
                            Payee Information</h2>
                        <hr />
                        <p className="list-group-heading">
                            Company Name:
                        </p>
                        {data.Payee.Name}
                        <p className="list-group-heading">
                            Contact Information:
                        </p>
                        <p className="list-group-item">
                            Fax #: {data.Payee.Fax}
                        </p>
                        <p className="list-group-item">
                            Telephone #: {data.Payee.Phone}
                        </p>
                        <p className="list-group-item">
                            Address:
                        </p>
                        <p className="list-group-item">
                            {data.Payee.Address.Address1}
                        </p>
                        <p className="list-group-item">
                            {data.Payee.Address.City}, {data.Payee.Address.StateOrProvince}, {data.Payee.Address.Country}
                        </p>
                        <p className="list-group-item">

                        </p>
                    </div>
                    <div className="list-column col-lg-4 col-xs-12">
                        <h2 className="payee_info"><i className="fas fa-credit-card"></i> Payment Information</h2>
                        <hr />
                        <p className="list-group-item">
                            PAN #: {data.Payment.PAN}
                        </p>
                        <p className="list-group-item">
                            CVV #: {data.Payment.CVV}
                        </p>
                        <p className="list-group-item">
                            Expiration Date: {data.Payment.Exp}
                        </p>
                    </div>
                    <div className="list-column col-lg-4 col-xs-12">
                        <h2 className="payee_info"><i className="fas fa-file-invoice"></i> Remittance(s)</h2>
                        {data.Remittance.map((remitData, index) => (
                            <div key={index} className="">
                            <hr />
                                <p className="list-group-item">
                                    Payor Name: {remitData.PayorName}
                                </p>
                                <p className="list-group-item">
                                    Payor ID #: {remitData.PayorId}
                                </p>
                                <p className="list-group-item">
                                    Invoice #: {remitData.InvoiceNo}
                                </p>
                                <p className="list-group-item">
                                    Description: {remitData.Description}
                                </p>
                                <p className="list-group-item">
                                    Amount: {remitData.Amount}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ClientInfo;