import React from 'react';
import {
  HourlyWeatherContainer,
  HourlyWeatherForTodayItem,
  TodayHours,
  TOdayHoursIcon,
  TodayHoursTemp,
} from './HourlyWeather.styled';
import { useSelector } from 'react-redux';
import {
  selectCurrentWeather,
  selectDailyWeather,
} from '../../store/reducers/weather/weather.slice';
import {
  customFloor,
  getHourlyWeatherForCurrentDate,
  getWeatherIconUrl,
} from '../../helpers/helpers';

const HourlyWeather: React.FC = () => {
  const currentWeather = useSelector(selectCurrentWeather);
  const dailyWeatherList = useSelector(selectDailyWeather);

  const dt = currentWeather.dt;
  const hourlyWeatherForToday = getHourlyWeatherForCurrentDate(dt, dailyWeatherList);

  return (
    <HourlyWeatherContainer>
      {hourlyWeatherForToday.map((hourlyWeather) => {
        const dateTimeString = hourlyWeather.dt_txt;
        const timePart = dateTimeString.split(' ')[1];
        const flooredTemp = customFloor(hourlyWeather.main.temp);
        const icon = getWeatherIconUrl(hourlyWeather.weather[0].icon);

        return (
          <HourlyWeatherForTodayItem key={hourlyWeather.dt}>
            <TodayHours>{timePart}</TodayHours>
            <TodayHoursTemp>{flooredTemp}°C</TodayHoursTemp>
            <TOdayHoursIcon src={icon} />
          </HourlyWeatherForTodayItem>
        );
      })}
    </HourlyWeatherContainer>
  );
};

export default HourlyWeather;
