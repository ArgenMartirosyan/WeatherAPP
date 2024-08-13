import {
  CurrentDayWeatherContainer,
  DailyWeatherContainer,
  MainContentContainer,
  MainContentWrapper,
} from './MainContent.styled';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import DailyWeather from '../DailyWeather/DailyWeather';

const MainContent: React.FC = () => {
  return (
    <MainContentWrapper>
      <MainContentContainer>
        <CurrentDayWeatherContainer>
          <CurrentWeather />
          <HourlyWeather />
        </CurrentDayWeatherContainer>
        <DailyWeatherContainer>
          <DailyWeather />
        </DailyWeatherContainer>
      </MainContentContainer>
    </MainContentWrapper>
  );
};

export default MainContent;
