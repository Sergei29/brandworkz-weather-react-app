import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ForecastField from "./ForecastField";

describe("LaunchItem", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const objMockProps = {
      strFieldName: "Location",
      mixedFieldValue: "City of Westminster",
    };
    wrapper = shallow(<ForecastField {...objMockProps} />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
