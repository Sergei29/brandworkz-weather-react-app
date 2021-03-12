import React from "react";
import { axiosWeather } from "../../utils";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import objApplicationStore from "../../redux/store/store";
import useCurrentLocationForecast from "./useCurrentLocationForecast";
import {
  objCurrentMockResponse,
  strMockErrorMessage,
  strTestLocation,
} from "./testData/testData";

type Props = {
  children: React.ReactNode;
};

describe("custom hook useCurrentLocationForecast", () => {
  const wrapper = ({ children }: Props) => (
    <Provider store={objApplicationStore}>{children}</Provider>
  );

  it("should handle the fetch start phase", () => {
    const { result } = renderHook(
      () => useCurrentLocationForecast(strTestLocation),
      { wrapper }
    );

    expect(result.current.bLoading).toEqual(true);
  });

  it("should handle the fetch success phase", async () => {
    jest
      .spyOn(axiosWeather, "get")
      .mockResolvedValueOnce(objCurrentMockResponse);

    const { result, waitForNextUpdate } = renderHook(
      () => useCurrentLocationForecast(strTestLocation),
      { wrapper }
    );

    await waitForNextUpdate();
    const { bLoading, nstrError, arrData } = result.current;

    expect(bLoading).toEqual(false);
    expect(nstrError).toEqual(null);
    expect(arrData.length).toBeGreaterThan(0);
  });

  it("should handle the fetch failure event", async () => {
    jest
      .spyOn(axiosWeather, "get")
      .mockRejectedValueOnce(new Error(strMockErrorMessage));
    const { result, waitForNextUpdate } = renderHook(
      () => useCurrentLocationForecast(strTestLocation),
      { wrapper }
    );

    await waitForNextUpdate();
    const { bLoading, nstrError } = result.current;

    expect(bLoading).toEqual(false);
    expect(nstrError).toEqual(strMockErrorMessage);
  });
});
