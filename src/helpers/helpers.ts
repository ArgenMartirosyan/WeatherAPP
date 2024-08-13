export const customFloor = (num: number): number => {
  const decimalPart = num % 1;

  if (decimalPart > 0.5) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
};

export const getWeatherIconUrl = (iconName: string): string => {
  return `https://openweathermap.org/img/wn/${iconName}@2x.png`;
};

export const getHourlyWeatherForCurrentDate = (currentDt: number, dailyList: any[]): any[] => {
  const currentDate = new Date(currentDt * 1000);

  return dailyList.filter((hourly) => {
    const hourlyDate = new Date(hourly.dt * 1000);

    return (
      hourlyDate.getUTCFullYear() === currentDate.getUTCFullYear() &&
      hourlyDate.getUTCMonth() === currentDate.getUTCMonth() &&
      hourlyDate.getUTCDate() === currentDate.getUTCDate()
    );
  });
};

export const getUniqueDaysWithWeatherData = (dailyWeatherList: any[]): any[] => {
  const uniqueDays = new Set<string>();

  return dailyWeatherList.filter((dailyWeather) => {
    const date = new Date(dailyWeather.dt * 1000).toISOString().split('T')[0];

    if (!uniqueDays.has(date)) {
      uniqueDays.add(date);
      return true;
    }

    return false;
  });
};

export const extractMonthDay = (dateTimeString: string): string => {
  const datePart = dateTimeString.split(' ')[0];

  const [_, month, day] = datePart.split('-');

  return `${month}-${day}`;
};
