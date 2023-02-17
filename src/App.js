import React, { useState } from 'react';
import CalcButton from './components/CalcButton';
import CalcOutput from './components/CalcOutput';
import CalcKeyboard from './components/CalcKeyboard';

import './style.css';

let GLOBAL_DATA = {
  number_1: '',
  number_2: '',
  action: '',
  output: '',
  buffer: '',
};

function App(props) {
  const [output, setOutput] = useState('0');
  function changeOutput() {
    setOutput(GLOBAL_DATA.output);
  }
  return (
    <div className="App">
      <div className="container">
        <CalcOutput output_value={output} />
        <CalcKeyboard global_data={GLOBAL_DATA} change_output={changeOutput} />
      </div>
      <br></br>
      {/* <CalcButton
        btn_value="1"
        btn_type="symbol"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      />
      <CalcButton
        btn_value="2"
        btn_type="symbol"
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
      <CalcButton
        btn_value="+/-"
        btn_type="toggle_symbol"
        global_values={GLOBAL_DATA}
        output_setter={changeOutput}
      /> */}
    </div>
  );
}

export default App;
