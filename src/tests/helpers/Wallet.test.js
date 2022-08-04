import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import Wallet from '../../pages/Wallet';
import mockData from './mockData';
import { renderWithRouterAndRedux, renderWithRedux } from './renderWith';

describe('wallet page', () => {
    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
      });

  test('if wallet renders', () => {
    renderWithRouterAndRedux(<Wallet />
);

    const walletTitle = screen.getByRole('heading', { name: /your wallet/i });
    const addExpenseButton = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(walletTitle).toBeInTheDocument();
    expect(addExpenseButton).toBeInTheDocument();
  });

  test('if currencies are fetch', () => {
    renderWithRedux(<Wallet/>)

    expect(fetch).toHaveBeenCalled()
  });
})

