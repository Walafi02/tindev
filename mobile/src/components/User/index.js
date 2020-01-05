import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ImageAvatar,
  TextName,
  TextBio,
  InfoProfile,
  Buttons,
  Button,
  IconLink,
  IconDisLink,
} from './styles';

export default function User({ data, handleDislike, handleLike }) {
  return (
    <Container>
      <InfoProfile>
        <ImageAvatar
          source={{
            uri:
              data.avatar_url ||
              `https://api.adorable.io/avatars/100/${data.login}.png`,
          }}
        />
        <TextName>{data.name || ''}</TextName>
        {data.bio && <TextBio>{data.bio}</TextBio>}
      </InfoProfile>
      <Buttons>
        <Button onPress={() => handleDislike(data._id)}>
          <IconDisLink />
        </Button>
        <Button onPress={() => handleLike(data._id)}>
          <IconLink />
        </Button>
      </Buttons>
    </Container>
  );
}

User.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    bio: PropTypes.string,
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }),
  handleDislike: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
};

User.defaultProps = {
  data: {},
};
