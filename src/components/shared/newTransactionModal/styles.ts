'use client ';

// Packages
import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    position: fixed;
    max-width: 600px;
    width: 100%;
    border-radius: 6px;
    padding: 5rem 3rem;
    background-color: ${theme.colors['background-primary']};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: ${theme.breakpoints.MD}) {
      bottom: auto;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      margin-top: 2rem;

      input {
        border-radius: 6px;
        border: 0;
        background: ${theme.colors['background-primary-input']};
        color: ${theme.colors['text-default']};
        border: 1px solid ${theme.colors['border-color-input']};
        font-size: 1.6rem;
        padding: 1.6rem;

        &::placeholder {
          color: ${theme.colors['text-light']};
        }
      }

      button[type='submit'] {
        height: 50px;
        border: 0;
        background: ${theme.colors['background-primary-button']};
        color: ${theme.colors['text-secondary']};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        &:not(:disabled):hover {
          filter: brightness(0.9);
          transition: filter 0.2s;
        }
      }
    }
  `}
`;

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${theme['gray-500']};
  `}
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: ${theme.colors['background-primary']};
    border-radius: 6px;
    padding: 1rem;
    border: 1px solid ${theme.colors['border-color-input']};
    cursor: pointer;
    color: ${theme.colors['text-default']};

    svg {
      color: ${variant === 'income'
        ? theme.colors['green-400']
        : theme.colors['red-400']};
    }

    &[data-state='unchecked']:hover {
      background: ${theme['gray-600']};
      transition: background-color 0.2s;
    }

    &[data-state='checked'] {
      color: ${theme.colors['text-secondary']};
      background: ${variant === 'income'
        ? theme.colors['green-400']
        : theme.colors['red-400']};

      border-color: transparent;

      svg {
        color: ${theme.colors['text-secondary']};
      }
    }
  `}
`;
