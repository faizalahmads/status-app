import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../components/Register';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

function PageRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="page-register">
      <header className="page-register-header">
        <h1>Register</h1>
      </header>
      <article className="page-register-main">
        <Register register={onRegister} />
        <p>Sudah punya akun?
          <Link to="/">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default PageRegister;
