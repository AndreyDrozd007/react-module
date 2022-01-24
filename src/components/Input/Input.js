import React from "react";
import { StyledTextField } from "styled";

const Input = ({ inputValue, setValue}) => {

  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }

  const onClickHandler = (event) => {
    event.stopPropagation()
  }

  return (
    <StyledTextField
    value={inputValue}
    onChange={onChangeHandler}
    onClick={onClickHandler}
  />
  )
};

export default Input;
