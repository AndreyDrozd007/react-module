import React from "react";
import {StyledTextField} from "../../styled";

const MyInput = ({ inputValue, setValue }) => {
  return (
    <StyledTextField
      value={inputValue}
      onChange={(event) => setValue(event.target.value)}
      onClick={(event) => event.stopPropagation()}
    />
  );
};

export default MyInput;
