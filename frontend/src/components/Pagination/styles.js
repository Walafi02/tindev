import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  button {
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  button:hover {
    opacity: 0.8;
  }

  button > svg {
    font-size: 30px;
    color: #df4723;
  }

  strong {
    font-size: 20px;
    color: #df4723;
  }
`;
