// Packages
import styled, { css } from 'styled-components';

interface SummaryCardProps {
  variant?: 'green';
}

export const SummaryContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    overflow: auto;
    gap: 1rem;
    width: 100%;

    margin-top: -3rem;

    @media (max-width: ${theme.breakpoints.SM}) {
      margin-top: -5rem;
      overflow: auto;
    }
  `}
`;

export const SummaryCard = styled.div<SummaryCardProps>`
  ${({ theme, variant }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;

    display: block;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    background-color: ${theme.colors['background-primary']};
    border-radius: 6px;
    padding: 2rem 3rem;

    @media (max-width: ${theme.breakpoints.SM}) {
      min-width: 250px;
      height: 100px;
      padding: 2rem;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 2.4rem;
      margin-bottom: 3.5rem;
      flex: 1;

      @media (max-width: ${theme.breakpoints.MD}) {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
      }
    }

    strong {
      justify-self: flex-end;
      font-family: ${theme.fonts.title};
      margin-top: auto;
      margin-top: 1rem;
      font-size: 3.2rem;
      font-weight: 600;

      @media (max-width: ${theme.breakpoints.MD}) {
        font-size: 2rem;
      }
    }

    ${variant === 'green' &&
    css`
      background-color: ${theme.colors['green-400']};
      color: ${theme.colors['text-secondary']};
    `}
  `};
`;
