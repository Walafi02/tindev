import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
  margin: 15px 0;
`;

export const ImageAvatar = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const ButtonExit = styled(RectButton)`
  padding: 5px 18px;
`;

export const ImageLogo = styled.Image`
  /* margin: 10px 0; */
`;

export const TextButtonExit = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
`;
