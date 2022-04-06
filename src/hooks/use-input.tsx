import { useReducer } from "react";

const initialInput = {
  value: "",
  isTouched: false,
};

const inputReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { isTouched: true, value: state.value };
    case "RESET":
      return { isTouched: false, value: "" };
    default:
      return initialInput;
  }
};

export const useInput = (validateValue: any) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInput);

  const valueIsValid: any = validateValue(inputState.value);
  const error = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: any) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    error,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
