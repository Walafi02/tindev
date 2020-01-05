import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import socketIo from 'socket.io-client';

import api from '~/services/api';

import { User, Header, Match } from '~/components';
import { Container, ListUsers } from './styles';

// const users = [
//   {
//     _id: 1,
//     name: 'teste 01',
//     login: 'teste01',
//     avatar_url: 'https://api.adorable.io/avatars/100/test.png',
//     bio:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores? Quia tenetur laborum pariatur, molestias nisi, quas facere ratione et soluta veniam accusantium illo libero minus ipsa exercitationem incidunt voluptates!',
//   },
//   {
//     _id: 2,
//     name: 'teste 02',
//     login: 'teste02',
//     avatar_url: 'https://api.adorable.io/avatars/100/test2.png',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
//   },
//   {
//     _id: 3,
//     name: 'teste 03',
//     avatar_url: 'https://api.adorable.io/avatars/100/test3.png',
//     login: 'teste03',
//   },
// ];

export default function Main({ navigation }) {
  const userParam = navigation.getParam('user');
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    if (userParam) {
      const socket = socketIo('http://10.0.0.104:3001', {
        query: { id: userParam._id },
      });

      socket.on('match-user', data => {
        setMatchDev(data);
      });
      setUser(userParam);
    }
  }, [userParam]);

  async function loadUsers(page = 1, oldUsers = []) {
    setPages(page);
    try {
      const { data } = await api.get(`users`, {
        params: {
          page,
        },
      });

      setTotalPages(data.totalPages);
      setUsers([...oldUsers, ...data.docs]);
    } catch (error) {
      Alert.alert('Error');
    }
  }

  useEffect(() => {
    if (user) {
      api.defaults.headers.Authorization = `Bearer ${user.token}`;
      loadUsers();
    }
  }, [user]); // eslint-disable-line

  function handleExit() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  function handleCloseMatch() {
    setMatchDev(null);
  }

  function loadMore() {
    if (totalPages !== pages) loadUsers(pages + 1, users);
  }

  function refreshList() {
    loadUsers();
  }

  async function handleLike(id) {
    try {
      await api.post(`/users/${id}/like`);
      setUsers(
        users.filter(element => {
          return element._id !== id;
        })
      );
    } catch (error) {
      Alert.alert('error');
    }
  }

  async function handleDislike(id) {
    try {
      await api.post(`/users/${id}/dislike`);

      setUsers(
        users.filter(element => {
          return element._id !== id;
        })
      );
    } catch (error) {
      Alert.alert('error');
    }
  }

  return (
    <>
      <Container>
        <ListUsers
          ListHeaderComponent={<Header user={user} handleExit={handleExit} />}
          data={users}
          keyExtractor={item => String(item._id)}
          onRefresh={refreshList}
          refreshing={false}
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
          renderItem={({ item }) => (
            <User
              data={item}
              handleDislike={handleDislike}
              handleLike={handleLike}
            />
          )}
        />
      </Container>
      {matchDev && (
        <Match matchDev={matchDev} handleCloseMatch={handleCloseMatch} />
      )}
    </>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};
