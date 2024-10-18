// Packages
import { createGlobalStyle, css } from 'styled-components';

// Styles
import { Container } from 'styles/container';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${theme.colors['primary']};
      }
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background-color: ${theme.colors['background-body']};
      color: ${theme.colors['text-default']};
      -webkit-font-smoothing: antialiased;
    }

    body,
    input-security,
    textarea,
    button {
      font: 400 1.6rem ${theme.fonts.default};
    }

    .container {
      ${Container};
    }
  `}
`;
