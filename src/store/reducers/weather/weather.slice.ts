import { createSlice } from '@reduxjs/toolkit';
import { TWeatherState } from './weather.types';
import { RootState } from '../../store.types';
import { fetchCurrentWeather, fetchDailyWeather } from './weather.thunk';

const initialState: TWeatherState = {
  country: 'Yerevan',
  prevCountry: '',
  current: null,
  daily: [],
  status: 'idle',
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherCountry: (state, action) => {
      if (state.country !== action.payload && state.country !== '') {
        state.prevCountry = state.country;
      }
      state.country = action.payload;
    },
    setCurrentWeatherData(state, action) {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.current = action.payload;
      })
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
        state.country = state.prevCountry;
      })
      .addCase(fetchDailyWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDailyWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.daily = action.payload.list;
      })
      .addCase(fetchDailyWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
        state.country = state.prevCountry;
      });
  },
});

// ACTIONS

export const { setWeatherCountry, setCurrentWeatherData } = weatherSlice.actions;

// SELECTORS

export const selectWeatherCountry = (state: RootState) => state.weather.country;
export const selectPrevCountry = (state: RootState) => state.weather.prevCountry;
export const selectWeatherStatus = (state: RootState) => state.weather.status;
export const selectCurrentWeather = (state: RootState) => state.weather.current;
export const selectDailyWeather = (state: RootState) => state.weather.daily;

export default weatherSlice.reducer;
