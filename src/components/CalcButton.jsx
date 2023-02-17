import React from 'react';
import '../components_styles/CalcButton.css';

function CalcButton(props) {
  function checkPressButton(e) {
    e.preventDefault();
    if (props.btn_type == 'symbol') {
      pressSymbol();
    } else if (props.btn_type == 'action') {
      pressAction();
    } else if (props.btn_type == 'return_result') {
      pressResult();
    } else if (props.btn_type == 'clear_all') {
      pressClearAll();
    } else if (props.btn_type == 'toggle_symbol_before') {
      pressToggleSymolBefore();
    }

    function pressSymbol() {
      props.global_values.buffer += props.btn_value;
    }
    function pressAction() {
      if (props.global_values.buffer != '') {
        if (props.global_values.number_1 == '') {
          props.global_values.number_1 = props.global_values.buffer;
        } else if (props.global_values.number_2 == '') {
          props.global_values.number_2 = props.global_values.buffer;
        }
        props.global_values.buffer = '';
      }
      if (props.global_values.action == '') {
        props.global_values.action = props.btn_value;
      } else if (props.global_values.action != '') {
        if (props.global_values.number_2 == '') {
          props.global_values.action = props.btn_value;
        } else if (props.global_values.number_2 != '') {
          props.global_values.number_1 = returnResult(
            parseFloat(props.global_values.number_1),
            parseFloat(props.global_values.number_2),
            props.global_values.action
          ).toString();
          props.global_values.number_2 = '';
          props.global_values.buffer = '';
          props.global_values.action = props.btn_value;
        }
      }
    }

    function pressResult() {
      if (
        props.global_values.number_1 != '' &&
        props.global_values.buffer != ''
      ) {
        props.global_values.number_2 = props.global_values.buffer;
        props.global_values.buffer = returnResult(
          parseFloat(props.global_values.number_1),
          parseFloat(props.global_values.number_2),
          props.global_values.action
        ).toString();
        props.global_values.number_1 = '';
        props.global_values.number_2 = '';
        props.global_values.action = '';
      } else if (
        props.global_values.number_1 != '' &&
        props.global_values.buffer == ''
      ) {
        props.global_values.buffer = props.global_values.number_1;
        props.global_values.number_1 = '';
        props.global_values.action = '';
      }
    }

    function pressToggleSymolBefore() {
      if (props.global_values.buffer[0] != '-') {
        props.global_values.buffer = '-' + props.global_values.buffer;
      } else if (props.global_values.buffer[0] == '-') {
        props.global_values.buffer = props.global_values.buffer.slice(1);
      }
    }
    function pressClearAll() {
      props.global_values.number_1 = '';
      props.global_values.number_2 = '';
      props.global_values.action = '';
      props.global_values.buffer = '';
    }
    props.global_values.output =
      props.global_values.number_1 +
      props.global_values.action +
      props.global_values.number_2 +
      props.global_values.buffer;
    console.log(props.global_values);
    console.log(props.global_values.output);
    props.output_setter();
  }
  return (
    <div className={'CalcButton CalcButton-' + props.btn_type}>
      <input
        type="submit"
        value={props.btn_value}
        onClick={checkPressButton}
        className="button"
      />
    </div>
  );

  function returnResult(a = 0, b = 0, operation) {
    if (operation == '+') {
      return a + b;
    } else if (operation == '-') {
      return a - b;
    } else if (operation == '*') {
      return a * b;
    } else if (operation == '/') {
      return a / b;
    }
  }
}

export default CalcButton;
