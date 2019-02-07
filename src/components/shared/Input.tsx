import * as React from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin: 2% 0%;
`;

const InputLabel = styled.label`
  background-color: darkblue;
  color: white;
  height: 100%;
  font-weight: 600;
  border-radius: 5px 0px 0px 5px;
  padding: 2%;
`;

const InputField = styled.input`
  position: relative;
  flex: 1 1 auto;
  padding: 2%;
  border-radius: 0px 5px 5px 0px;
  border-style: solid;
  :focus {
    box-shadow: 0px 0px 1px 1px lightblue;
  }
`;

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export function Input(props: InputProps) {
  return (
    <InputGroup>
      <InputLabel htmlFor="">{props.label}</InputLabel>
      <InputField type="text" />
    </InputGroup>
  );
}
