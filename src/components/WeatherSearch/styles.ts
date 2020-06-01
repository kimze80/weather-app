import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  justify-items: center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  form {
    display: flex;
    flex-flow: row;

    input {
      margin-right: 10px;
      border-radius: 5px;
      border: #c1c1c1 1px solid;
      padding: 6px 10px;
      width: 300px;
    }

    button {
      background: #00e5ff;
      height: 36px;
      border-radius: 5px;
      border: 0;
      padding: 0 30px;
      color: #312e38;
      /* width: 100%; */
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#00e5ff')};
      }
    }
  }
`;
