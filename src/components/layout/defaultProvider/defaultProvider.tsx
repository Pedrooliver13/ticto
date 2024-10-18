'use client';

// Packages
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { ToastContainer } from 'react-toastify';

// Contexts
import { TransactionsProvider } from 'contexts/transactionsContext';

// Libs
import StyledComponentsRegistry from 'lib/styled-registry';

// Styles
import { GlobalStyle } from 'styles/global';
import { defaultTheme } from 'styles/theme/default';
import 'react-toastify/dist/ReactToastify.css';

export function DefaultProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TransactionsProvider>
      <StyledComponentsRegistry>
        <StyleSheetManager
          enableVendorPrefixes
          shouldForwardProp={(propName, elementToBeRendered) => {
            return typeof elementToBeRendered === 'string'
              ? isPropValid(propName)
              : true;
          }}
        >
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}
            <ToastContainer />
          </ThemeProvider>
        </StyleSheetManager>
      </StyledComponentsRegistry>
    </TransactionsProvider>
  );
}
