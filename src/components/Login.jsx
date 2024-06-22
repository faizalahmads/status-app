import React from 'react';
import PropTypes from 'prop-types';
import Input from '../hooks/Input';

function Login({ login }) {
  const [email, emailChange] = Input('');
  const [password, passwordChange] = Input('');

  return (
    <form className="login-input">
      <input type="text" value={email} onChange={emailChange} placeholder="Email" />
      <input type="password" value={password} onChange={passwordChange} placeholder="Password" />
      <button type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
