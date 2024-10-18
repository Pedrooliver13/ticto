// Packages
import styled, { css } from 'styled-components';

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const TransactionsContainer = styled.main`
  width: 100%;
  margin: 4rem auto 0;
`;

export const TransactionsTable = styled.table`
  ${({ theme }) => css`
    max-width: 100%;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    th {
      text-align: left;
      padding: 1.25rem 0rem;
      color: ${theme.colors['text-light']};
      font-weight: 400;

      @media (max-width: ${theme.breakpoints.MD}) {
        display: none;
      }
    }

    tbody tr {
      max-width: 100%;
      width: 100%;
      margin-bottom: 10px;
      background: ${theme.colors['background-primary']};

      @media (max-width: ${theme.breakpoints.MD}) {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }

    td {
      text-align: left;
      padding: 1.25rem 1rem;

      .actions {
        cursor: pointer;
        width: 1.6rem;
      }

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`;

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ theme, variant }) => css`
    font-weight: bold;
    color: ${variant === 'income'
      ? theme.colors['green-400']
      : theme.colors['red-400']};
  `}
`;
