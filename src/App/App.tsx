import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks/redux.hooks';
import { fetchCurrentWeather, fetchDailyWeather } from '../store/reducers/weather/weather.thunk';
import Header from '../components/Header/Header';
import { AppContainer } from './App.styled';
import MainContent from '../components/MainContent/MainContent';
import { useSelector } from 'react-redux';
import { selectWeatherCountry, selectWeatherStatus } from '../store/reducers/weather/weather.slice';

function App() {
  const dispatch = useAppDispatch();
  const status = useSelector(selectWeatherStatus);
  const country = useSelector(selectWeatherCountry);

  useEffect(() => {
    dispatch(fetchCurrentWeather(country));
    dispatch(fetchDailyWeather(country));
  }, [country]);

  return (
    <AppContainer>
      <Header />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && <MainContent />}
    </AppContainer>
  );
}

export default App;
