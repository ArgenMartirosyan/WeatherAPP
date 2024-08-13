import React from 'react';
import {
  CurrentCity,
  CurrentWeatherContainer,
  CurrentWeatherDescription,
  CurrentWeatherIcon,
  CurrentWeatherIconContainer,
  CurrentWeatherTemp,
} from './CurrentWeather.styled';
import { useSelector } from 'react-redux';
import {
  selectCurrentWeather,
  selectWeatherCountry,
  selectWeatherUnit,
} from '../../store/reducers/weather/weather.slice';
import { customFloor, getWeatherIconUrl } from '../../helpers/helpers';

const CurrentWeather: React.FC = () => {
  const currentWeatherInfo = useSelector(selectCurrentWeather);
  const country = useSelector(selectWeatherCountry);
  const unit = useSelector(selectWeatherUnit);

  if (!currentWeatherInfo) {
    return <div>No weather information available</div>;
  }

  const { main, weather } = currentWeatherInfo;

  const flooredTemp = customFloor(main.temp, unit);
  const icon = getWeatherIconUrl(weather[0].icon);
  const description = weather[0].main;

  return (
    <CurrentWeatherContainer>
      <CurrentCity>{country}</CurrentCity>
      <CurrentWeatherTemp>
        {flooredTemp}
        {unit}
      </CurrentWeatherTemp>
      <CurrentWeatherIconContainer>
        <CurrentWeatherIcon src={icon} />
      </CurrentWeatherIconContainer>
      <CurrentWeatherDescription>{description}</CurrentWeatherDescription>
    </CurrentWeatherContainer>
  );
};

export default CurrentWeather;
