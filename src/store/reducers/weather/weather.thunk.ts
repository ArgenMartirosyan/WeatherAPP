import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, GLOBAL_URL } from '../../../constants/api';

export const fetchCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async (city: string) => {
    const response = await axios.get(
      `${GLOBAL_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);

export const fetchDailyWeather = createAsyncThunk(
  'weather/fetchDailyWeather',
  async (city: string) => {
    const response = await axios.get(
      `${GLOBAL_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);