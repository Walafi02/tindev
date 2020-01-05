import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #F5F5F5;
    overflow: auto;
  }

  body {
    -webkit-font-smoothing: antialiased; /** deixa a font mais definida */
  }

  body, input, bottom {
    font: 14px 'Roboto' sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    opacity: 0.9;
  }
`;
