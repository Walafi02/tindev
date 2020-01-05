import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  margin: 5px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  .content {
    background: #fff;
    flex: 1;
    margin-bottom: 10px;
  }

  img {
    width: 280px;
    height: 280px;
  }

  div.info {
    margin: 10px;

    p {
      color: #999;
      margin-top: 3px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 135px;
    height: 30px;
    background: #fff;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
