import React from 'react';
import CalcButton from './CalcButton';
import '../components_styles/CalcKeyboard.css';

function CalcKeyboard(props) {
  return (
    <div className="CalcKeyboard">
      <div className="top-action-bar">
        <CalcButton
          btn_value="AC"
          btn_type="clear_all"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="+/-"
          btn_type="toggle_symbol_before"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
      </div>
      <div className="side-action-bar">
        <CalcButton
          btn_value="+"
          btn_type="action"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="-"
          btn_type="action"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="*"
          btn_type="action"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="/"
          btn_type="action"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
      </div>
      <div className="digit-block">
        <CalcButton
          btn_value="1"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="2"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="3"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="4"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="5"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="6"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="7"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="8"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="9"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
      </div>
      <div className="bottom-symbol-bar">
        <CalcButton
          btn_value="."
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="0"
          btn_type="symbol"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
        <CalcButton
          btn_value="="
          btn_type="return_result"
          global_values={props.global_data}
          output_setter={props.change_output}
        />
      </div>
    </div>
  );
}

export default CalcKeyboard;
