import React from 'react';
import '../components_styles/CalcOutput.css'

function CalcOutput(props) {
  return (
    <div className="CalcOutput">
      <div className="CalcOutputContent">{props.output_value}</div>
    </div>
  );
}

export default CalcOutput;
