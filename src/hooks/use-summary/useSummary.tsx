'use client';

// Packages
import { useMemo } from 'react';
import { useContextSelector } from 'use-context-selector';

// Contexts
import {
  TransactionsContext,
  TransactionContextProps,
} from 'contexts/transactionsContext';

interface useSummaryResponse {
  income: number;
  outcome: number;
  total: number;
}

export const useSummary = (): useSummaryResponse => {
  const transactions = useContextSelector(
    TransactionsContext,
    (context: TransactionContextProps) => context.transactions
  );

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'income') {
            acc.income += transaction?.price;
            acc.total += transaction?.price;
          } else {
            acc.outcome += transaction?.price;
            acc.total -= transaction?.price;
          }

          return acc;
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        }
      ),
    [transactions]
  );

  return summary;
};
