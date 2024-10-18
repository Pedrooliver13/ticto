'use client';

// Packages
import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors['primary']};
    height: 177px;
    padding: 3.6rem 0 5rem;
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    img {
      width: 186;
      height: 34;
      cursor: pointer;

      @media (max-width: ${theme.breakpoints.MD}) {
        width: 100px !important;
      }
    }
  `}
`;

export const NewTransactionButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors['background-primary-button']};
    color: ${theme.colors['text-light']};
    width: 245px;
    height: 53px;
    border: 0;

    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
      transition: background-color 0.3s ease-in-out;
    }

    @media (max-width: ${theme.breakpoints.MD}) {
      max-width: 130px;
      width: 100%;
      height: 38px;
      font-size: 1rem;
    }
  `}
`;
