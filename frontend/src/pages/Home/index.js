import React from 'react';

import { Container } from './styles';
import logo from '~/assets/logo.svg';

import User from '~/components/User';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <img
          src="https://api.adorable.io/avatars/100/walafi.png"
          alt="Avatar"
          className="avatar"
        />
        <a href="/">Sair</a>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <section>
        <User />
        <User />
        <User />
        <User />
        <User />
      </section>
    </Container>
  );
}
