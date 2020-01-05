import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import itsamatch from '~/assets/itsamatch.png';

export default function Match({ matchDev, handleCloseMatch }) {
  return (
    <Container>
      <img src={itsamatch} alt="It's Match!" />

      <img
        src={
          matchDev.avatar_url ||
          `https://api.adorable.io/avatars/100/${
            matchDev ? matchDev.login : ''
          }.png`
        }
        alt="Avatar"
        className="avatar"
      />

      <strong className="name">{matchDev && matchDev.name}</strong>
      <p>{matchDev && matchDev.bio}</p>
      <button type="button" onClick={handleCloseMatch}>
        Fechar
      </button>
    </Container>
  );
}

Match.propTypes = {
  matchDev: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }),
  handleCloseMatch: PropTypes.func,
};
