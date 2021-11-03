import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CurrencyRate from "../CurrencyRate/CurrencyRate";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getCurrencyCode } from "../../utils/currencyCode";
import { RatesActionCreators } from "../../store/actions/ratesActions";

const StyledRates = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    justify-content: center;
    align-items: center;
`;

const StyledSelector = styled.select`
    width: 100px;
    height: 50px;

    margin-top: 20px;

    font-size: 20px;
`;

const Rates = () => {
    const { source, rates, isError } = useSelector((state) => state.rates);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!source) {
            const currencyCode = getCurrencyCode(navigator.language);
            dispatch(RatesActionCreators.getRates(currencyCode));
        }
    }, []);

    const handleOnChange = (event) => {
        dispatch(RatesActionCreators.getRates(event.target.value));
    };

    return (
        <StyledRates>
            <StyledSelector value={source} onChange={handleOnChange}>
                {Object.keys(rates).map((code) => (
                    <option value={code} key={code}>
                        {code}
                    </option>
                ))}
            </StyledSelector>

            {Object.entries(rates).map(([code, value]) => (
                <CurrencyRate
                    value={"1"}
                    from={code}
                    to={source}
                    result={1 / value}
                    key={code}
                />
            ))}

            {isError && <ErrorMessage />}
        </StyledRates>
    );
};

export default Rates;
