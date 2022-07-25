// import React from 'react';

// class PercentageStat extends Component {

//   render() {
//     const { label, score = 0, total = Math.max(1, score) } = this.props;

//     return (
//       <div>
//         <h6>{ label }</h6>
//         <span>{ Math.round(score / total * 100) }%</span>
//       </div>
//     )
//   }

// }

// export default PercentageStat;

import React, { Component } from 'react';

export class Percentagestat extends Component {
  render() {
    const { label, score = 0, total = Math.max(1, score) } = this.props;

    return (
      <div>
            <h6>{ label }</h6>
         <span>{ Math.round(score / total * 100) }%</span>
      </div>
    );
  }
}

export default Percentagestat;
