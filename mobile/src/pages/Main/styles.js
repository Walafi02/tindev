import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
`;

export const ListUsers = styled.FlatList.attrs({
  showVerticalScrollIndicator: true,
})`
  margin-bottom: 20px;
`;
