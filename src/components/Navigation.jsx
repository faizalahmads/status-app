import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ userAuth, signOut }) {
  const { id, name, avatar } = userAuth;  

  return (
    <div className="navigation">
      <img src={avatar} alt={id} title={name} />
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <button type='button' data-cy="btn-signout" onClick={signOut}>Sign Out</button>
    </div>
  );
}

const userAuthShapes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired
};

Navigation.propTypes = {
  userAuth: PropTypes.shape(userAuthShapes).isRequired,
  signOut: PropTypes.func.isRequired
}

export default Navigation;
