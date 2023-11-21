import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
   }
   /* :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
   } */
   body {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gold-500']};
    -webkit-font-smoothing: antialiased;
   }
   body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
   }
`