'use client';

// Packages
import { ReactElement } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import * as zod from 'zod';
import {
  X as XIcon,
  ArrowUpCircle as ArrowUpCircleIcon,
  ArrowDownCircle as ArrowDownCircleIcon,
} from 'react-feather';

// Contexts
import {
  TransactionsContext,
  TransactionContextProps,
} from 'contexts/transactionsContext';

// Styles
import * as Styled from './styles';

const newTransactionSchema = zod.object({
  name: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = zod.infer<typeof newTransactionSchema>;

export const NewTransactionModal = (): ReactElement => {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context: TransactionContextProps) => context?.createTransaction
  );

  const {
    reset,
    control,
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: 'income',
    },
  });

  const handleCreateNewTransaction = async (
    data: NewTransactionFormInputs
  ): Promise<void> => {
    const { category, name, price, type } = data;

    try {
      await createTransaction({ category, name, price, type });
      setFocus('name');
      reset();
    } catch {}
  };

  return (
    <Dialog.Portal>
      <Styled.Overlay />
      <Styled.Content>
        <Dialog.Title>Cadastrar transação</Dialog.Title>
        <Styled.CloseButton>
          <XIcon size={24} />
        </Styled.CloseButton>

        <Dialog.Description></Dialog.Description>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            id="name"
            type="text"
            placeholder="Nome"
            required
            autoComplete="off"
            {...register('name')}
          />
          <input
            id="price"
            type="number"
            placeholder="Preço"
            autoComplete="off"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <Styled.TransactionType
                id="type"
                name="type"
                onValueChange={field.onChange}
                value={field.value}
              >
                <Styled.TransactionTypeButton
                  id="income"
                  variant="income"
                  value="income"
                >
                  <ArrowUpCircleIcon size={24} />
                  Entrada
                </Styled.TransactionTypeButton>

                <Styled.TransactionTypeButton
                  id="outcome"
                  variant="outcome"
                  value="outcome"
                >
                  <ArrowDownCircleIcon size={24} />
                  Saída
                </Styled.TransactionTypeButton>
              </Styled.TransactionType>
            )}
          />
          <input
            id="category"
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <button id="submitButton" type="submit" disabled={isSubmitting}>
            CADASTRAR
          </button>
        </form>
      </Styled.Content>
    </Dialog.Portal>
  );
};
