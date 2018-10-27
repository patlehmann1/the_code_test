import React from 'react';

const ClientInfo = props => {
    return (
        <div className="data-wrapper row">
            <ul className="list-group col-xs-12 col-lg-12">
                {props.paymentData.map((data, index) => (
                    <div className="list-results text-dark" key={index}>
                        <li className="list-group-item">
                            {console.log(data)}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
};

export default ClientInfo;