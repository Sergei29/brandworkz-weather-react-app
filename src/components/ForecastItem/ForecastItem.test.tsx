import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ForecastItem from "./ForecastItem";

describe("LaunchItem", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const objMockProps = {
      objForecast: {
        ob_time: "2021-03-12 21:31",
        city_name: "City of Westminster",
        wind_spd: 2.24,
        wind_cdir_full: "southwest",
        wind_cdir: "SW",
        sunset: "18:01",
        sunrise: "06:17",
        lat: 51.5,
        weather: { icon: "r01n", code: 500, description: "Light rain" },
        datetime: "2021-03-12:21",
        temp: 8.3,
        app_temp: 8.4,
      },
    };
    wrapper = shallow(<ForecastItem {...objMockProps} />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
