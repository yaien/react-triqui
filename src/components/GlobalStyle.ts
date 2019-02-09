import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css?family=Nunito");


    body,
    html,
    #app {
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Nunito", sans-serif;
    }
`;
