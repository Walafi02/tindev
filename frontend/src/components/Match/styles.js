import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);

  color: #fff;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  .avatar {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin: 25px;
  }

  strong {
    font-size: 24px;
  }

  p {
    max-width: 400px;
    font-size: 18px;
    text-align: center;
  }

  button {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    background: transparent;
    border: none;
    margin: 15px;
    padding: 8px 12px;

    transition: all 0.4s ease-in-out;
  }

  button:hover {
    transform: scale(1.05);
  }
`;
