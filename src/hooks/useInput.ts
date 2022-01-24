import React, { useReducer } from "react";

// type definition
interface InputState {
  value: string;
  isTouched: boolean;
}
interface Action {
  type: string;
  [key: string]: string;
}

const initialState = {
  value: "",
  isTouched: false,
};

function inputReducer(state: InputState, action: Action): InputState {
  switch (action.type) {
    case 'INPUT':
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case 'BLUR':
      return { 
        value: state.value,
        isTouched: true 
      };
    case 'RESET':
      return {
        value: '',
        isTouched: false
      };
    default:
      return state;
  }
}

function useInput(validateValue: (value: string) => boolean) {
  const [state, dispatch] = useReducer(inputReducer, initialState);
  const hasValue = validateValue(state.value);
  const hasError = !hasValue && state.isTouched;

  function valueChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "INPUT", value: event.target.value });
  }

  function inputBlurHandler() {
    dispatch({ type: "BLUR" });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return {
    value: state.value,
    hasValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
