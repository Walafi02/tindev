import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import socketIo from 'socket.io-client';
import api from '~/services/api';
import { Container } from './styles';
import logo from '~/assets/logo.svg';

import User from '~/components/User';
import Pagination from '~/components/Pagination';
import Match from '~/components/Match';

export default function Dashboard({ history }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);

  const [matchDev, setMatchDev] = useState(null);

  async function loadUsers(page = 1) {
    setLoading(true);
    setCurrentPage(page);

    try {
      const { data } = await api.get('users', {
        params: {
          page,
        },
      });
      setUsers(data.docs);
      setTotalPages(data.totalPages);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user && user._id) {
      const socket = socketIo('http://localhost:3001', {
        query: { id: user._id },
      });

      socket.on('match-user', data => {
        setMatchDev(data);
      });
    }
  }, [user]); // eslint-disable-line

  useEffect(() => {
    const userGit = JSON.parse(localStorage.getItem('user'));
    if (!userGit) {
      history.push('/');
    }
    setUser(userGit);
  }, []); // eslint-disable-line

  useEffect(() => {
    if (user) {
      api.defaults.headers.Authorization = `Bearer ${user.token}`;
      loadUsers();
    }
  }, [user]);

  function handleExit() {
    localStorage.clear();
    api.defaults.headers.Authorization = null;
    history.push('/');
  }

  async function handleLike(id) {
    try {
      await api.post(`/users/${id}/like`);

      loadUsers(
        users.length === 1 && currentPage > 1 ? currentPage - 1 : currentPage
      );
    } catch (error) {
      alert(error);
    }
  }

  async function handleDislike(id) {
    try {
      await api.post(`/users/${id}/dislike`);
      loadUsers(
        users.length === 1 && currentPage > 1 ? currentPage - 1 : currentPage
      );
    } catch (error) {
      alert(error);
    }
  }

  function handleCloseMatch() {
    setMatchDev(null);
  }

  return (
    <>
      <Container>
        <header>
          <img
            src={
              user && user.avatar_url
                ? user.avatar_url
                : `https://api.adorable.io/avatars/100/${
                    user ? user.login : 'user'
                  }.png`
            }
            alt="Avatar"
            className="avatar"
          />
          <button type="button" onClick={handleExit}>
            Sair
          </button>
          <img src={logo} alt="Logo" className="logo" />
        </header>

        <section>
          {users.map(item => (
            <User
              key={item._id}
              data={item}
              handleLike={handleLike}
              handleDislike={handleDislike}
            />
          ))}
        </section>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          loading={loading}
          loadItens={loadUsers}
        />
      </Container>
      {matchDev && (
        <Match matchDev={matchDev} handleCloseMatch={handleCloseMatch} />
      )}
    </>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
