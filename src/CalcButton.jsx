import React from 'react';

function CalcButton(props) {
  function checkActionButton(e) {
    e.preventDefault();
    if (props.btn_type == 'digit') {
      props.global_values.buffer += props.btn_value;
    } else if (props.btn_type == 'action') {
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
    } else if (props.btn_type == 'return_result') {
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
    } else if (props.btn_type == 'clear_all') {
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
    <div className="CalcButton">
      <input
        type="submit"
        value={props.btn_value}
        onClick={checkActionButton}
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
