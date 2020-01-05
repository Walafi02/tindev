import React from 'react';
import PropTypes from 'prop-types';
import itsamatch from '~/assets/itsamatch.png';

import {
  Container,
  ImgItsamatch,
  ImageAvatar,
  TextName,
  TextBio,
  Button,
  TextButton,
} from './styles';

export default function Match({ matchDev, handleCloseMatch }) {
  return (
    <Container>
      <ImgItsamatch source={itsamatch} />

      <ImageAvatar
        source={{
          uri:
            matchDev.avatar_url ||
            `https://api.adorable.io/avatars/100/${matchDev.login}.png`,
        }}
      />
      <TextName>{matchDev.name}</TextName>
      {matchDev.bio && <TextBio>{matchDev.bio}</TextBio>}
      <Button onPress={handleCloseMatch}>
        <TextButton>Fechar</TextButton>
      </Button>
    </Container>
  );
}

Match.propTypes = {
  matchDev: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  handleCloseMatch: PropTypes.func.isRequired,
};
