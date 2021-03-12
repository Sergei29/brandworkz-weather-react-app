export const objCurrentMockResponse = {
  data: {
    count: 1,
    data: [
      {
        city_name: "City of Westminster",
        datetime: "2021-03-12:20",
        lat: 51.5,
        lon: -0.12,
        ob_time: "2021-03-12 20:01",
        station: "D5621",
        sunrise: "06:17",
        sunset: "18:01",
        temp: 7.8,
        wind_cdir_full: "southwest",
        wind_cdir: "SW",
        wind_dir: 222,
        wind_spd: 1.34,
        weather: {
          code: 804,
          description: "Overcast clouds",
          icon: "c04n",
        },
      },
    ],
  },
};

export const objExtendedMockResponse = {
  data: {
    city_name: "City of Westminster",
    country_code: "GB",
    data: [
      {
        app_max_temp: 10,
        app_min_temp: 3.8,
        clouds: 92,
        datetime: "2021-03-12",
        high_temp: 7.7,
        low_temp: 5.3,
        max_temp: 10,
        min_temp: 7,
        sunrise_ts: 1615530148,
        sunset_ts: 1615572006,
        temp: 8.4,
        valid_date: "2021-03-12",
        weather: {
          code: 520,
          description: "Light shower rain",
          icon: "r04d",
        },
        wind_cdir_full: "southwest",
        wind_dir: 234,
        wind_gust_spd: 15.9449,
        wind_spd: 5.71517,
      },
      {
        app_max_temp: 14,
        app_min_temp: 2.8,
        clouds: 92,
        datetime: "2021-03-13",
        high_temp: 10.7,
        low_temp: 5.1,
        max_temp: 10.3,
        min_temp: 4,
        sunrise_ts: 1615530148,
        sunset_ts: 1615572006,
        temp: 8.4,
        valid_date: "2021-03-13",
        weather: {
          code: 520,
          description: "Broken clouds",
          icon: "r04d",
        },
        wind_cdir_full: "southwest",
        wind_dir: 234,
        wind_gust_spd: 15.9449,
        wind_spd: 5.71517,
      },
    ],
    lat: 51.5,
    lon: -0.12,
    state_code: "ENG",
    timezone: "Europe/London",
  },
};

export const strMockErrorMessage = "Test Error Message";

export const strTestLocation = "london";
