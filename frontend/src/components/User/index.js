import React from 'react';

import { MdFavorite, MdClose } from 'react-icons/md';
import { Container } from './styles';

export default function User() {
  return (
    <Container>
      <div className="content">
        <img
          src="https://api.adorable.io/avatars/100/walafi2.png"
          alt="Avatar"
        />

        <div className="info">
          <strong>Walafi Ferreira</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            cumque delectus voluptates nihil
          </p>
        </div>
      </div>
      <div className="buttons">
        <button type="button">
          <MdClose size={30} color="#ff0000" />
        </button>
        <button type="button">
          <MdFavorite size={24} color="#64E8B6" />
        </button>
      </div>
    </Container>
  );
}
