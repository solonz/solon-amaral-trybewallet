import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import WalletForm from '../../components/WalletForm';
import { renderWithRouterAndRedux, renderWithRedux } from './renderWith';

describe('walletForm component', () => {
      test('if all inputs are being rendered', () => {
        renderWithRouterAndRedux(<WalletForm />);
    
        [
          screen.getByTestId(/value-input/i),
          screen.getByTestId(/description-input/i),
          screen.getByTestId(/currency-input/i),
          screen.getByTestId(/method-input/i),
          screen.getByTestId(/tag-input/i),
          screen.getByRole('button', { name: /adicionar despesa/i }),
        ].forEach((element) => expect(element).toBeInTheDocument());
      });

      it('testing inputs the WalletForm', () => {
        renderWithRouterAndRedux(<WalletForm />)
        const inputValue = screen.getByTestId('value-input');
        expect(inputValue).toBeInTheDocument();
        expect(inputValue).toHaveAttribute('value', '');
        expect(inputValue).toHaveAttribute('type', 'number');
        userEvent.type(inputValue, '3');
        expect(inputValue).toHaveAttribute('value', '3');
        const optionFood = screen.getByRole('option', { name:'Alimentação'})
        expect(optionFood).toBeInTheDocument();
        const optionLeisure = screen.getByRole('option', { name: 'Lazer'})
        expect(optionLeisure).toBeInTheDocument();
        const optionWork = screen.getByRole('option', { name: 'Trabalho'})
        expect(optionWork).toBeInTheDocument();
        const optionTransport = screen.getByRole('option', { name: 'Transporte'})
        expect(optionTransport).toBeInTheDocument();
           });
    });

