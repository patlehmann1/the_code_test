import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ClientInfo from './components/ClientInfo/index';

class App extends Component {
  state = {
    paymentData: []
  }

  getPaymentData = () => {
    axios.get('/data')
      .then(res => res.data)
      .then(paymentData => this.setState({ paymentData }));
  }

  componentDidMount() {
    this.getPaymentData();
  }


  render() {
    return (
      <div className="App bg-white container">
        <header className="App-header">
          <div className="app-header-content">
            <img className="paymerang_logo img-fluid" src={require('./paymerang_logo.png')} alt="paymerang_logo" />
          </div>
          <div className="app-header-content row">
            <span className="paymerang-description col-xs-12 col-lg-12">Internal Payee/Payment/Remittance Information</span>
          </div>
        </header>
        <div className="app-body">
          <ClientInfo paymentData={this.state.paymentData} />
        </div>
      </div>
    );
  }
}

export default App;
