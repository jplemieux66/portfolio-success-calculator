import React from 'react';
import { Component } from 'react';

import HappyFace from 'file-loader!../img/happy-face.png';
import OkFace from 'file-loader!../img/ok-face.png';
import SadFace from 'file-loader!../img/sad-face.png';

class ResultsDisplay extends Component {
  render() {
    const { rate, initialValue, finalValue } = this.props

    return (
      <div className="results-container">
        <h2>Results</h2>
        <img src={this.getImage(rate)} />
        <span>
          <h4>Success Rate: </h4>
          <h3>{ rate }%</h3>
          <h4>Median Value: </h4>
          <h3>{ initialValue * (finalValue / 1000) }$</h3>
        </span>
      </div>
    )
  }

  getImage(rate) {
    if (rate >= 75) {
      return HappyFace;
    } else if (rate > 0) {
      return OkFace;
    } else {
      return SadFace;
    }
  }
}

export default ResultsDisplay;