import React from 'react';
import PropTypes from 'prop-types';

import { MdFavorite, MdClose } from 'react-icons/md';

import { Container } from './styles';

export default function User({ data, handleLike, handleDislike }) {
  return (
    <Container>
      <div className="content">
        <img
          src={
            data.avatar_url ||
            `https://api.adorable.io/avatars/100/${data ? data.login : ''}.png`
          }
          alt="Avatar"
        />

        <div className="info">
          <strong>{data.name}</strong>
          <p>{data.bio}</p>
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => handleDislike(data._id)}>
          <MdClose size={30} color="#ff0000" />
        </button>
        <button type="button" onClick={() => handleLike(data._id)}>
          <MdFavorite size={24} color="#64E8B6" />
        </button>
      </div>
    </Container>
  );
}

User.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    _id: PropTypes.string,
    login: PropTypes.string,
  }),
  handleLike: PropTypes.func,
  handleDislike: PropTypes.func,
};
