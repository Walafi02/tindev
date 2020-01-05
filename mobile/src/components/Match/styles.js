import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);

  justify-content: center;
  align-items: center;
`;

export const ImgItsamatch = styled.Image``;

export const ImageAvatar = styled.Image`
  height: 160px;
  width: 160px;
  border-radius: 130px;
  border-color: #fff;
  border-width: 4px;
  margin: 20px auto 10px;
`;

export const TextName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const TextBio = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #fff;
  text-align: center;
  margin-top: 7px;
  font-size: 15px;
  padding: 0 10px;
`;

export const Button = styled(RectButton)``;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 15px;
  padding: 8px 12px;
`;
