import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(37, 205, 148);
    }


    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
