import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;

    min-width: 350px;
    padding: 15px;

    img {
      height: 40px;
    }

    input {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 40px;
      padding: 7px 10px;
      font-size: 12px;
      margin: 10px 0;
    }

    button {
      margin-top: 15px;
      height: 40px;
      background: #df4723;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 14px;

      &:hover {
        background: ${darken(0.03, '#DF4723')};
      }
    }
  }
`;
