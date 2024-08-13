import styled from 'styled-components';

export const HourlyWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  overflow-y: auto;
`;

export const HourlyWeatherForTodayItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  border-bottom: 1px solid #e0e0e0;
`;

export const TodayHours = styled.div`
  font-size: 14px;
  color: #fff;
`;

export const TodayHoursTemp = styled.div`
  font-size: 14px;
  color: #fff;
  margin: 6px;
`;

export const TOdayHoursIcon = styled.img`
  width: 40px;
  height: 40px;
`;
