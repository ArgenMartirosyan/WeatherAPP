export interface TWeatherState {
  country: string;
  prevCountry: string;
  current: any;
  daily: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
