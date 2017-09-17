import React from 'react';
import { Component } from 'react';

import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import PayoutPeriodSlider from './PayoutPeriodSlider';
import PortfolioCompositionSlider from './PortfolioCompositionSlider';
import WithdrawalRateSlider from './WithdrawalRateSlider';

import HappyFace from 'file-loader!../img/happy-face.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>Portfolio Success Rate Calculator</h1>
        <p>Based on the 2011 revision of the Trinity Study</p>
        <div className="container">
          <div className="col col-left">
            <div className="variables-container">
              <h2>Variables</h2>
              <PortfolioCompositionSlider />
              <PayoutPeriodSlider />
              <WithdrawalRateSlider />
              <Toggle label="Inflation Adjusted" />
              <h4>Initial Portfolio Value</h4>
              <TextField id="initial-value-textfield" defaultValue="1000" />
            </div>
          </div>
          <div className="col col-right">
            <div className="results-container">
              <h2>Results</h2>
              <img src={HappyFace} />
              <span>
                <h4>Success Rate: </h4>
                <h3>87%</h3>
                <h4>Median Value: </h4>
                <h3>2300.65$</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;