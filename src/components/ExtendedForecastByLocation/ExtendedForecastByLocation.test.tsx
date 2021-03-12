import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import objApplicationStore from "../../redux/store/store";
import ExtendedForecastByLocation from "./ExtendedForecastByLocation";

describe("LaunchItem", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const objMockProps = {
      strLocationName: "london",
    };
    wrapper = shallow(
      <Provider store={objApplicationStore}>
        <ExtendedForecastByLocation {...objMockProps} />
      </Provider>
    );
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
