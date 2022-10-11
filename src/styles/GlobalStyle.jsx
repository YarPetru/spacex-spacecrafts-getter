import { createGlobalStyle } from 'styled-components';
import backgroundImage from 'images/spacex-background.jpg';

export const GlobalStyle = createGlobalStyle`  
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    body {
    background: url(${backgroundImage}) no-repeat center top fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
     background-size: cover;
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    a {
    text-decoration: none;
    font-style: normal;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin: 0;
    }

    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

`;
