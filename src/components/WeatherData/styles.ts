import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin-top: 20px;

  .temperature {
    p {
      font-size: 70px;
      color: burlywood;
    }
  }

  .icon {
    text-align: center;
  }
`;

export const InContainer = styled.div`
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  align-items: center;
`;

export const City = styled.p`
  font-size: 120px;
  font-weight: bold;
  margin-bottom: 20px;
  color: lightblue;
`;
