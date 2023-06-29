import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        background: rgb(37, 205, 148);
    }

    #root {
        height: 100%;
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
