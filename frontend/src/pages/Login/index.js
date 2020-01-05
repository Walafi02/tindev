import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.svg';

import { Container } from './styles';

import api from '~/services/api';

export default function Login({ history }) {
  const [username, setUsername] = useState('walafi02');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      history.push('/home');
    }
  }, []); // eslint-disable-line

  async function handleSubmit() {
    setLoading(true);
    try {
      const { data } = await api.post('signin', { username });

      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      history.push('/home');
    } catch (error) {
      alert('error');
    }
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="Logo" />
        <input
          type="text"
          placeholder="Usuário do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={username.length === 0 || loading}
        >
          {loading ? 'Carregando' : 'Enviar'}
        </button>
      </div>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
