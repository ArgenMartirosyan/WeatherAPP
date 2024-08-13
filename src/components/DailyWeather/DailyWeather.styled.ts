import styled from 'styled-components';

export const DailyWeatherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DailyWeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  margin: 0 0.5rem;

  background-color: #5b6a79;
  border-radius: 15px;
  transition: 0.2s;

  &:hover {
    background-color: #6b7a89;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    scale: 1.05;
  }
`;

export const DayDate = styled.div`
  font-size: 1rem;
  color: #fff;
`;

export const TempAndIconContainer = styled.div`
  display: flex;
  margin-left: 1rem;
`;

export const DayTemp = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #fff;
`;

export const DayTempIcon = styled.img`
  width: 50px;
  height: 50px;
`;
