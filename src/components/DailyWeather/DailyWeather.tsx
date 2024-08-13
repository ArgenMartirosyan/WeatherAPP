import { useSelector } from 'react-redux';
import {
  selectDailyWeather,
  setCurrentWeatherData,
} from '../../store/reducers/weather/weather.slice';
import {
  DailyWeatherContainer,
  DailyWeatherItem,
  DayDate,
  DayTemp,
  DayTempIcon,
  TempAndIconContainer,
} from './DailyWeather.styled';
import {
  customFloor,
  extractMonthDay,
  getUniqueDaysWithWeatherData,
  getWeatherIconUrl,
} from '../../helpers/helpers';
import { useAppDispatch } from '../../store/hooks/redux.hooks';

const DailyWeather: React.FC = () => {
  const dispatch = useAppDispatch();
  const dailyWeatherList = useSelector(selectDailyWeather);

  const uniqueDailyWeatherList = getUniqueDaysWithWeatherData(dailyWeatherList);

  return (
    <DailyWeatherContainer>
      {uniqueDailyWeatherList.map((day, index) => {
        const monthDay = extractMonthDay(day.dt_txt);
        const flooredTemp = customFloor(day.main.temp);
        const icon = getWeatherIconUrl(day.weather[0].icon);

        return (
          <DailyWeatherItem key={index} onClick={() => dispatch(setCurrentWeatherData(day))}>
            <DayDate>{monthDay}</DayDate>
            <TempAndIconContainer>
              <DayTemp>{flooredTemp}°C</DayTemp>
              <DayTempIcon src={icon} />
            </TempAndIconContainer>
          </DailyWeatherItem>
        );
      })}
    </DailyWeatherContainer>
  );
};

export default DailyWeather;
