import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ErrorMessage from "./ErrorMessage";

describe("LaunchItem", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const objMockProps = {
      strErrorMessage: "Test error message",
    };
    wrapper = shallow(<ErrorMessage {...objMockProps} />);
  });

  it("should render", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
