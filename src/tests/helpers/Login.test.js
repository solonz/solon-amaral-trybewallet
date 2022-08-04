import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('test login', () => {
  test('if Login form renders', () => {
    const initialState = {
    wallet: {},
    user: {},
    }

    renderWithRouterAndRedux(<App />,
    {initialState,
    initialEntries: ['/Login'],
  } 
);

    const loginTitle = screen.getByRole('heading', { name: /faça o seu login/i });
    const emailInput = screen.getByRole('textbox', { name: /email:/i });
    const passInput = screen.getByLabelText('Senha:');
    const loginButton = screen.getByRole('button', { name: /entrar/i });
    expect(loginTitle).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('if Login succeed', () => {
    const { store } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passInput = screen.getByLabelText(/senha/i);
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, 'amaral.solon@hotmail.com');
    userEvent.type(passInput, 'aaaaaaa')
    userEvent.click(submitButton);

    expect(store.getState().user.email).toBe('amaral.solon@hotmail.com');
    expect(store.getState().user.password).toBe('aaaaaaa');
  });
})

