import React from 'react';
import CalcButton from './CalcButton';

function CalcKeyboard(props) {
  return (
    <div className="CalcKeyboard">
      <div className="top-action-bar">
        <CalcButton
          btn_value="CA"
          btn_type="clear_all"
          global_values={props.global_data}
          output_setter={changeOutput}
        />
        <CalcButton
          btn_value="+/-"
          btn_type="toggle_symbol"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
      </div>
      <div className="digit-bar">
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
          btn_value="3"
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
        <CalcButton
          btn_value="4"
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
        <CalcButton
          btn_value="5"
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
        <CalcButton
          btn_value="6"
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
        <CalcButton
          btn_value="7"
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
        <CalcButton
          btn_value="7"
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
        <CalcButton
          btn_value="9"
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
      </div>
      <div className="digit-bottom-bar">
        <CalcButton
          btn_value="."
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
        <CalcButton
          btn_value="0"
          btn_type="digit"
          global_values={GLOBAL_DATA}
          output_setter={changeOutput}
        />
      </div>
      <div className="side-action-bar">
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
      </div>
    </div>
  );
}

export default CalcKeyboard;
