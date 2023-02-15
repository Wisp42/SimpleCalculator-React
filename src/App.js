import React, { useState } from 'react';
import CalcButton from './CalcButton';
import './style.css';

let GLOBAL_DATA = {
  number_1: '',
  number_2: '',
  action: '',
  output: '',
  buffer: '',
};

function CalcOutput(props) {}

function App(props) {
  const [output, setOutput] = useState('0');
  function changeOutput() {
    setOutput(GLOBAL_DATA.output);
  }
  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <h2>{output}</h2>
      <CalcButton
        btn_value="1"
        btn_type="digit"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
      <CalcButton
        btn_value="2"
        btn_type="digit"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
      <CalcButton
        btn_value="+"
        btn_type="action"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
      <CalcButton
        btn_value="-"
        btn_type="action"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
      <CalcButton
        btn_value="*"
        btn_type="action"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
      <CalcButton
        btn_value="/"
        btn_type="action"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
      <CalcButton
        btn_value="="
        btn_type="return_result"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
      <CalcButton
        btn_value="CA"
        btn_type="clear_all"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
    </div>
  );
}

export default App;
