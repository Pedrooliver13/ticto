// Packages
import { ReactElement, ReactNode } from 'react';

// Components
import { Header } from 'components/layout/header';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = (props: DefaultLayoutProps): ReactElement => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
