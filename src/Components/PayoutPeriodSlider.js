import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Slider from 'material-ui/Slider';

const PayoutPeriodSlider = ({period, onValueChanged}) => (
  <div>
    <h4>Payout Period</h4>
    <h3>{period} Years</h3>
    <Slider step={5} min={15} max={30} onChange={onValueChanged}/>
  </div>
);

PayoutPeriodSlider.propTypes = {
  percentBonds: PropTypes.number,
  onValueChanged: PropTypes.func
}

PayoutPeriodSlider.defaultProps = {
  period: 15
}

export default PayoutPeriodSlider;