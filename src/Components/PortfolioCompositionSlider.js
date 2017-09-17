import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Slider from 'material-ui/Slider';

const PortfolioCompositionSlider = ({percentBonds, onValueChanged}) => (
  <div>
    <h4>Portfolio Composition</h4>
    <h3>{100-percentBonds}% Stocks / {percentBonds}% Bonds</h3>
    <Slider step={25} min={0} max={100} onChange={onValueChanged}/>
  </div>
);

PortfolioCompositionSlider.propTypes = {
  percentBonds: PropTypes.number,
  onValueChanged: PropTypes.func
}

PortfolioCompositionSlider.defaultProps = {
  percentBonds: 0
}

export default PortfolioCompositionSlider;