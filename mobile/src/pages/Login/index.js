import React, { useEffect, useState } from 'react';
import { Image, Alert } from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import { Container, Form, ButtonSubmit, Input } from './styles';

// navigation.navigate('MyWeb', {star});
// AsyncStorage.setItem('users', JSON.stringify(users));
// const users = await AsyncStorage.getItem('users');
// if (users) {
//   this.setState({users: JSON.parse(users)});
// }

import logo from '~/assets/logo.png';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadUser() {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      navigation.navigate('Main', { user: JSON.parse(user) });
    }
  }

  useEffect(() => {
    loadUser();
  }, []); // eslint-disable-line

  async function handleSubmit() {
    setLoading(true);
    try {
      const { data } = await api.post('signin', { username });

      AsyncStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      navigation.navigate('Main', { user: data });
    } catch (error) {
      Alert.alert('error');
    }
    setLoading(false);
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Usuário do Github"
          value={username}
          onChangeText={setUsername}
        />
        <ButtonSubmit
          onPress={handleSubmit}
          enabled={username.length > 0}
          loading={loading}
        >
          Enviar
        </ButtonSubmit>
      </Form>
    </Container>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
