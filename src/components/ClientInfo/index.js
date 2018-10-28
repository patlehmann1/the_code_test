import React from 'react';
import './ClientInfo.css';

const ClientInfo = props => {
    return (
        <div className="data-wrapper">
            {props.paymentData.map((data, index) => (
                <div className="list-results text-dark" key={index}>
                    <div className="list-column row">
                        <div className="col-lg-6 col-sm-12">
                            <h2 className="payee_info"><i className="fas fa-user"></i>
                                Payee Information</h2>
                            <hr />
                            <p className="list-group-heading">
                                Company Name:
                            </p>
                            <p className="list-group-item">
                                {data.Payee.Name}
                            </p>
                            <p className="list-group-heading">
                                Contact Information:
                            </p>
                            <p className="list-group-item">
                                Fax #: {data.Payee.Fax}
                            </p>
                            <p className="list-group-item">
                                Telephone #: {data.Payee.Phone}
                            </p>
                            <p className="list-group-heading">
                                Mailing Address:
                            </p>
                            <p className="list-group-item">
                                {data.Payee.Address.Address1}
                            </p>
                            <p className="list-group-item">
                                {data.Payee.Address.City}, {data.Payee.Address.StateOrProvince}, {data.Payee.Address.Country}
                            </p>
                        </div>
                        <div className="list-column col-lg-6 col-xs-12">
                            <h2 className="payee_info"><i className="fas fa-credit-card"></i> Payment Information</h2>
                            <hr />
                            <p className="list-group-heading">
                                PAN #: 
                            </p>
                            <p className="list-group-item">
                                {data.Payment.PAN}
                            </p>
                            <p className="list-group-heading">
                                CVV #: 
                            </p>
                            <p className="list-group-item">
                                {data.Payment.CVV} 
                            </p>
                            <p className="list-group-heading">
                                Expiration Date: 
                            </p>
                            <p className="list-group-item">
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
                                <p className="list-group-heading">
                                    Payor Name:
                                </p>
                                <p className="list-group-item">
                                    {remitData.PayorName}
                                </p>
                                <p className="list-group-heading">
                                    Payor ID #: 
                                </p>
                                <p className="list-group-item">
                                    {remitData.PayorId}
                                </p>
                                <p className="list-group-heading">
                                    Invoice #: 
                                </p>
                                <p className="list-group-item">
                                    {remitData.InvoiceNo}
                                </p>
                                <p className="list-group-heading">
                                    Description: 
                                </p>
                                <p className="list-group-item">
                                    Payor Name: {remitData.Description}
                                </p>
                                <p className="list-group-heading">
                                    Amount: 
                                </p>
                                <p className="list-group-item">
                                    {remitData.Amount}
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