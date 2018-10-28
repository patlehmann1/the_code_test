import React, { Component } from 'react';
import './App.css';

import paymentData from './paymentData';
import ClientInfo from './components/ClientInfo/index';

class App extends Component {

  state = {
    paymentData: paymentData
  }

  render() {
    return (
      <div className="App bg-white container">
        <header className="App-header">
          <div className="app-header-content row">
            <img className="paymerang_logo img-fluid" src='/images/paymerang_logo.png' alt="paymerang_logo" />
          </div>
          <div className="app-header-content row">
            <span className="paymerang-description col-xs-12 col-lg-12">Internal Payee/Payment/Remittance Information</span>
          </div>
          <hr />
        </header>
        <div className="app-body row">
          <ClientInfo paymentData={this.state.paymentData} />
        </div>
      </div>
    );
  }
}

export default App;
