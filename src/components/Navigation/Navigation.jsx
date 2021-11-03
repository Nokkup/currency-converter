import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
    display: flex;
    width: 100%;
    height: 70px;

    justify-content: center;
    align-items: center;

    background-color: #5e6668;
`;

const StyledNavLink = styled(NavLink)`
    margin-right: 50px;

    font-size: 32px;

    color: #c1c8c7;
    background: transparent;

    text-decoration: none;

    &.active {
        color: #fff;
    }
`;

const Navigation = () => {
    return (
        <StyledNavigation>
                <StyledNavLink to="/converter">Converter</StyledNavLink>
                <StyledNavLink to="/rates">Rates</StyledNavLink>
        </StyledNavigation>
    );
};

export default Navigation;
