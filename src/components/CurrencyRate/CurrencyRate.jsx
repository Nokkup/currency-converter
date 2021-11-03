import React from "react";
import styled from "styled-components";
import { formatCurrencyRate } from "../../utils/formatCurrency";

const StyledCurrencyRate = styled.div`
    height: 50px;

    margin-top: 20px;
    padding: 0 15px;
    
    font-size: 24px;
    font-weight: 500;

    overflow-wrap: anywhere;
`;

const CurrencyRate = ({ value, from, to, result }) => {
    return <StyledCurrencyRate>{formatCurrencyRate(value, from, to, result)}</StyledCurrencyRate>;
};

export default React.memo(CurrencyRate);
