import React from 'react';
import PropTypes from 'prop-types';
import Input from '../hooks/Input';

function Register({ register }) {
    const [name, nameChange] = Input('');
    const [email, emailChange] = Input('');
    const [password, passwordChange] = Input('');

    return (
        <form className="register-input">
            <input type="text" value={name} onChange={nameChange} placeholder="Masukkan Username" />
            <input type="email" value={email} onChange={emailChange} placeholder="Masukkan Email" />
            <input type="password" value={password} onChange={passwordChange} placeholder="Masukkan Password" />
            <button type="button" onClick={() => register({ name, email, password })}>Register</button>
        </form>
    );
}

Register.propTypes = {
    register: PropTypes.func.isRequired
};

export default Register
