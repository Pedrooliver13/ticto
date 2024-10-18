// Packages
import { ReactElement } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

// Components
import { NewTransactionModal } from 'components/shared';

// Assets
import TictoLogo from 'assets/ticto-logo.svg';

// Styles
import * as Styled from './styles';

export const Header = (): ReactElement => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent className="container">
        <Image
          src={TictoLogo}
          alt="Logo marca da TICTO"
          priority
          style={{ width: 'auto', height: 'auto' }}
        />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Styled.NewTransactionButton>
              Nova transação
            </Styled.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
};
