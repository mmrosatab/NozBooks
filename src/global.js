import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100vh;
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
  }
  ul{
    list-style: none;
  }
  text-overflow: ellipsis;
`;

export default GlobalStyle;
