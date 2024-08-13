import styled from 'styled-components';

export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  border-right: 1px solid #fff;
`;

export const CurrentCity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  color: #fff;
  margin-top: 3rem;
`;

export const CurrentWeatherTemp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  color: #fff;
`;

export const CurrentWeatherIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const CurrentWeatherIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: auto;
`;

export const CurrentWeatherDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  font-size: 1.5rem;
  color: #fff;
`;
