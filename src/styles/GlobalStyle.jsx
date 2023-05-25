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
    font-family: 'Roboto Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    monospace;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #242a37;
    background-color: #091e3f;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

   l

`;
