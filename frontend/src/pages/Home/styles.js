import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 10px 25px;

  header {
    display: flex;
    flex-direction: column;

    align-items: center;
    margin: 20px 0 15px;

    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    .logo {
      width: 100px;
      height: 50px;
    }

    button {
      background: transparent;
      border: none;
    }
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
