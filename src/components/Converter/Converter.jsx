import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CurrencyRate from "../CurrencyRate/CurrencyRate";
import Input from "../Input/Input";
import { parseInput } from "../../utils/parseInput";
import { ConvertActionCreators } from "../../store/actions/convertActions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const StyledConverter = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 80vh;

    justify-content: center;
    align-items: center;
`;

const Converter = () => {
    const dispatch = useDispatch();
    const converted = useSelector((state) => state.converted);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            const params = parseInput(event.target.value);

            if (params) {
                dispatch(ConvertActionCreators.convert(params));
            }
        }
    };

    return (
        <StyledConverter>
            <Input
                type="text"
                placeholder={"15 usd in rub"}
                onKeyPress={handleKeyPress}
            />
            <CurrencyRate {...converted} />
            {converted.isError && <ErrorMessage />}
        </StyledConverter>
    );
};

export default Converter;
