import React from 'react';
import { Component } from 'react';

import ResultsDisplay from './ResultsDisplay';
import VariablesControl from './VariablesControl';

class PortfolioCalculator extends Component {
  render() {
    return (
      <div id="calculator">
        <h1>Portfolio Success Rate Calculator</h1>
        <p>Based on the 2011 revision of the Trinity Study</p>
        <div className="container">
          <div className="col col-left">
            <VariablesControl />
          </div>
          <div className="col col-right">
            <ResultsDisplay rate={87} initialValue={1000} finalValue={1234} />
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioCalculator;