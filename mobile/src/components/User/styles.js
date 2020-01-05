import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.SafeAreaView`
  align-items: center;
  margin-bottom: 15px;
`;

export const ImageAvatar = styled.Image`
  height: 300px;
  width: 300px;
`;

export const TextName = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-top: 7px;
`;

export const TextBio = styled.Text`
  width: 300px;
  text-align: center;
  color: #999;
  margin-top: 3px;
  padding: 0 10px;
  font-size: 15px;
`;

export const InfoProfile = styled.View`
  background: #fff;
`;

export const Buttons = styled.View`
  /* display: flex; */

  flex-direction: row;
  width: 300px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  margin-top: 15px;
  background: #fff;
  width: 142px;
  /* height: 50px; */
  padding: 8px 0;
  justify-content: center;
  align-items: center;
`;

export const IconDisLink = styled(Icon).attrs({
  name: 'close',
  size: 32,
  color: '#ff0000',
})``;

export const IconLink = styled(Icon).attrs({
  name: 'favorite',
  size: 32,
  color: '#64E8B6',
})``;
