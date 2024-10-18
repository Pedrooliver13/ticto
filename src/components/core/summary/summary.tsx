'use client';

// Packages
import { ReactElement } from 'react';
import {
  ArrowUpRight as ArrowUpRightIcon,
  ArrowDownLeft as ArrowDownLeftIcon,
} from 'react-feather';

// Hooks
import { useSummary } from 'hooks/use-summary/useSummary';

// Utils
import { priceFormatter } from 'utils/formatter';

// Styles
import * as Styled from './styles';

export const Summary = (): ReactElement => {
  const summary = useSummary();

  return (
    <Styled.SummaryContainer className="container">
      <Styled.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowDownLeftIcon size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary?.income)}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowUpRightIcon size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary?.outcome)}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard variant="green">
        <header>
          <span>Saldo Total</span>
        </header>

        <strong>{priceFormatter.format(summary?.total)}</strong>
      </Styled.SummaryCard>
    </Styled.SummaryContainer>
  );
};
