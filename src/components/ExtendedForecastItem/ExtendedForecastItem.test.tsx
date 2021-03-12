import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { objExtendedForecastItemProps } from "../../utils/testData/testData";
import ExtendedForecastItem from "./ExtendedForecastItem";

describe("LaunchItem", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const objMockProps = {
      objForecast: objExtendedForecastItemProps,
    };
    wrapper = shallow(<ExtendedForecastItem {...objMockProps} />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
