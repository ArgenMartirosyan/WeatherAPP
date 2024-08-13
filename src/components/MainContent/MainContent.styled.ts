import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MainContentContainer = styled.div`
  width: 70vw;
  height: 80vh;
  background-color: #2a313a;
  border-radius: 15px;
`;

export const CurrentDayWeatherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;
  border-bottom: 1px solid #fff;
`;

export const DailyWeatherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  overflow-x: hidden;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
