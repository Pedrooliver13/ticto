'use client';

// Packages
import { ReactElement, useState, useCallback, useEffect } from 'react';
import { createContext } from 'use-context-selector';
import { toast } from 'react-toastify';

// Libs
import { api } from 'lib/axios';

interface Transaction {
  id: number;
  name: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export interface TransactionContextProps {
  transactions: Array<Transaction>;
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
}

interface CreateTransactionInput {
  name: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextProps);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps): ReactElement => {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  const fetchTransactions = useCallback(
    async (query?: string): Promise<void> => {
      const response = await api.get(`/transactions`, {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      });

      setTransactions(response?.data);
    },
    []
  );

  const createTransaction = useCallback(
    async (data: CreateTransactionInput): Promise<void> => {
      const { category, name, price, type } = data;

      try {
        const response = await api.post('/transactions', {
          category,
          name,
          price,
          type,
          createdAt: new Date().toISOString(),
        });

        setTransactions((state) => [response.data, ...state]);
        toast.success('Transação criada com sucesso!');
      } catch {
        toast.error('Erro ao criar transação');
      }
    },
    []
  );

  const deleteTransaction = useCallback(async (id: number) => {
    try {
      await api.delete(`/transactions/${id}`);

      setTransactions((state) =>
        state.filter((transaction) => transaction.id !== id)
      );

      toast.success('Transação deletada com sucesso!');
    } catch {
      toast.error('Erro ao deletar transação');
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
