import React from 'react';
import { Component } from 'react';

import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import PayoutPeriodSlider from './PayoutPeriodSlider';
import PortfolioCompositionSlider from './PortfolioCompositionSlider';
import WithdrawalRateSlider from './WithdrawalRateSlider';

class VariablesControl extends Component {
  render() {
    return (
      <div className="variables-container">
        <h2>Variables</h2>
        <PortfolioCompositionSlider />
        <PayoutPeriodSlider />
        <WithdrawalRateSlider />
        <Toggle label="Inflation Adjusted" />
        <h4>Initial Portfolio Value</h4>
        <TextField id="initial-value-textfield" defaultValue="1000" />
      </div>
    );
  }
}

export default VariablesControl;