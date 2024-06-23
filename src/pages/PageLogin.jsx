import React from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetUserAuth } from '../states/userAuth/action';

function PageLogin () {
    const dispatch = useDispatch();

    const onLogin = ({email, password}) => {
        dispatch(asyncSetUserAuth({email, password}));
    };

    return (
        <section className="page-login">
            <header className="page-login-header">
                <h1>Login</h1>
            </header>
            <article className="page-login-main">
                <Login login={onLogin} />
                <p>Belum punya akun?
                    <Link to="/register">Daftar</Link>
                </p>
            </article>
        </section>
    );
}

export default PageLogin
