import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import Wallet from '../../pages/Wallet';
import mockData from './mockData';
import { renderWithRouterAndRedux, renderWithRedux } from './renderWith';

const initialState =
    {
        wallet: {
          description: '',
          tag: '',
          method: '',
          value: 0,
          currencies: [
            'USD',
            'CAD',
            'GBP',
            'ARS',
            'BTC',
            'LTC',
            'EUR',
            'JPY',
            'CHF',
            'AUD',
            'CNY',
            'ILS',
            'ETH',
            'XRP',
            'DOGE'
          ],
          expenses: [
            {
              value: '1',
              description: '',
              currency: 'USD',
              method: 'Dinheiro',
              tag: 'Alimentação',
              exchangeRates: mockData,
              id: 0
            },
                      ],
          totalField: 10.5688
        },
        user: {
          email: 'amaral.solon@hotmail.com',
          password: 'aaaaaaaaa'
        }
      }

describe('table at wallet page', () => {
  test('if table renders', () => {
    renderWithRouterAndRedux(<Wallet />, {initialState: initialState})
    const inputValue = screen.getByTestId('value-input');
    const expenseButton =  screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.type(inputValue, '1');
    userEvent.click(expenseButton);

    expect(screen.getByRole('columnheader', { name: /câmbio utilizado/i })).toBeInTheDocument();
    expect(screen.getByTestId('delete-btn')).toBeInTheDocument();
  })
  test('if delete expense works', () => {
    renderWithRouterAndRedux(<Wallet />, {initialState: initialState})
    const inputValue = screen.getByTestId('value-input');
    const expenseButton =  screen.getByRole('button', { name: /adicionar despesa/i });
    const deleteButton = screen.getByTestId('delete-btn');
    userEvent.type(inputValue, '1');
    userEvent.click(expenseButton);
    userEvent.click(deleteButton);

    expect(deleteButton).not.toBeInTheDocument();
  })
});

