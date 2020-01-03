import React from 'react';

import { Container } from './styles';

import logo from '~/assets/logo.svg';

export default function Login() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo" />
        <input type="text" />
        <button type="button">Enviar</button>
      </div>
    </Container>
  );
}
