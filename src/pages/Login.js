import React from 'react';
import propType from 'prop-types';
import { connect } from 'react-redux';
import { loginClick } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  buttonValidation = () => {
    const { email, password } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const validadeEmail = emailRegex.test(email);
    const MIN_CHARS = 6;
    const validadePassword = password.length >= MIN_CHARS;
    if (validadeEmail && validadePassword) {
      return false;
    }
    return true;
  }

  loginSucceed = () => {
    const { dispatchUserDataToGlobalState, history } = this.props;
    dispatchUserDataToGlobalState(this.state);
    history.push('/carteira');
  }

  render() {
    // const { email, password } = this.state;
    return (
      <div>
        <h1>Faça o seu login</h1>
        <form>
          <label htmlFor="email">
            Email:
            <input
              onChange={ (event) => {
                this.setState({ email: event.target.value });
              } }
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              onChange={ (event) => {
                this.setState({ password: event.target.value });
              } }
              type="password"
              id="password"
              name="password"
              placeholder="mínimo 6 caracteres"
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            onClick={ this.loginSucceed }
            disabled={ this.buttonValidation() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUserDataToGlobalState: (payload) => dispatch(loginClick(payload)),
});

Login.propTypes = {
  dispatchUserDataToGlobalState: propType.func.isRequired,
  history: propType.objectOf(propType.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
