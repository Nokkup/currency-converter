import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        background-color: #f6fafb;
        
        box-sizing: border-box;

        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;