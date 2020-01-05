import React from 'react';
// import { View } from 'react-native';
import PropTypes from 'prop-types';
import logo from '~/assets/logo.png';

import {
  Container,
  ImageAvatar,
  ButtonExit,
  ImageLogo,
  TextButtonExit,
} from './styles';

export default function Header({ user, handleExit }) {
  return (
    <Container>
      <ImageAvatar
        source={{
          uri: user
            ? user.avatar_url
            : `https://api.adorable.io/avatars/100/${
                user ? user.login : ''
              }.png`,
        }}
      />

      <ButtonExit onPress={handleExit}>
        <TextButtonExit>Sair</TextButtonExit>
      </ButtonExit>

      <ImageLogo source={logo} />
    </Container>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }),
  handleExit: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: {},
};
