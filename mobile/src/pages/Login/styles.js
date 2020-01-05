import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
  padding: 0 30px;

  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 40px;
`;

export const ButtonSubmit = styled(Button)`
  opacity: ${props => (props.enabled ? 1 : 0.6)};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  padding: 0 15px;
  height: 46px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
  background: #fff;
`;
