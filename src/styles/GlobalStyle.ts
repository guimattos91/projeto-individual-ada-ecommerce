import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
        --color-primary: #a77ae4;
        --color-secundary: #34ff89;
        --color-terciary: #f0fb7f;
        --color-danger: #e94444;
        --color-gray: #babbc2;
        --color-dark: #23252f;
        --color-white: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--color-white);
    }

    p{
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
