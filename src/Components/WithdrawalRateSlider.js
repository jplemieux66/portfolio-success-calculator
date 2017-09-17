import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Slider from 'material-ui/Slider';

const WithdrawalRateSlider = ({rate, onValueChanged}) => (
  <div>
    <h4>Withdrawal Rate</h4>
    <h3>{rate}% / Year</h3>
    <Slider step={1} min={3} max={12} onChange={onValueChanged} />
  </div>
);

WithdrawalRateSlider.propTypes = {
  percentBonds: PropTypes.number,
  onValueChanged: PropTypes.func
}

WithdrawalRateSlider.defaultProps = {
  rate: 6
}

export default WithdrawalRateSlider;