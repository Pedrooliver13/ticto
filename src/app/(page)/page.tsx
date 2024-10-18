'use client';

// Packages
import { useContextSelector } from 'use-context-selector';
import { Trash as TrashIcon } from 'react-feather';

// Components
import { Summary } from 'components/core';
import { DefaultLayout } from 'components/layout/defaultLayout';

// Contexts
import {
  TransactionContextProps,
  TransactionsContext,
} from 'contexts/transactionsContext';

// Utils
import { priceFormatter, dateFormatter } from 'utils/formatter';

// Styles
import * as Styled from './styles';

export default function App() {
  const { transactions, deleteTransaction } = useContextSelector(
    TransactionsContext,
    ({ transactions, deleteTransaction }: TransactionContextProps) => ({
      transactions,
      deleteTransaction,
    })
  );

  return (
    <DefaultLayout>
      <Summary />

      <Styled.TransactionsContainer className="container">
        <Styled.TransactionsTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={`${transaction?.id}${transaction.name}`}>
                <td>{transaction?.name}</td>
                <td>
                  <Styled.PriceHighlight variant={transaction?.type}>
                    {priceFormatter.format(transaction?.price)}
                  </Styled.PriceHighlight>
                </td>
                <td>{transaction?.category}</td>
                <td>
                  {dateFormatter.format(new Date(transaction?.createdAt))}
                </td>
                <td>
                  <TrashIcon
                    className="actions"
                    color="#DB3766"
                    onClick={() => deleteTransaction(transaction?.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Styled.TransactionsTable>
      </Styled.TransactionsContainer>
    </DefaultLayout>
  );
}
