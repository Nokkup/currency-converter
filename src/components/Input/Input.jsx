import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: 400px;
    height: 60px;

    padding-left: 15px;

    font-size: 24px;

    border: 3px solid #DAD3D1;
    border-radius: 10px;

    outline: none;

    &:active,
    &:focus {
        border: 3px solid #252b31;
    }
`;

const Input = (props) => {
    return <StyledInput {...props} />;
};

export default Input;
