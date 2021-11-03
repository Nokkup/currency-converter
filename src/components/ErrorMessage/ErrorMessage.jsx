import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
    color: #ff0033;
    font-size: 16px;
`;

const ErrorMessage = (props) => {
    return (
        <StyledErrorMessage>
            {props.children || "Произошла ошибка при загрузке данных"}
        </StyledErrorMessage>
    )
}

export default ErrorMessage;
