import React from "react";
import { axiosWeather } from "../../utils";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import objApplicationStore from "../../redux/store/store";
import useExtendedForecast from "./useExtendedForecast";
import {
  objExtendedMockResponse,
  strMockErrorMessage,
  strTestLocation,
} from "../../utils/testData/testData";

type Props = {
  children: React.ReactNode;
};

describe("useExtendedForecast", () => {
  const wrapper = ({ children }: Props) => (
    <Provider store={objApplicationStore}>{children}</Provider>
  );

  it("should handle the fetch start phase", () => {
    const { result } = renderHook(() => useExtendedForecast(strTestLocation), {
      wrapper,
    });

    expect(result.current.bLoading).toEqual(true);
  });

  it("should handle the fetch success phase", async () => {
    jest
      .spyOn(axiosWeather, "get")
      .mockResolvedValueOnce(objExtendedMockResponse);

    const { result, waitForNextUpdate } = renderHook(
      () => useExtendedForecast(strTestLocation),
      { wrapper }
    );

    await waitForNextUpdate();
    const { bLoading, nstrError, arrForecast } = result.current;

    expect(bLoading).toEqual(false);
    expect(nstrError).toEqual(null);
    expect(arrForecast.length).toBeGreaterThan(0);
  });

  it("should handle the fetch failure event", async () => {
    jest
      .spyOn(axiosWeather, "get")
      .mockRejectedValueOnce(new Error(strMockErrorMessage));

    const { result, waitForNextUpdate } = renderHook(
      () => useExtendedForecast(strTestLocation),
      { wrapper }
    );

    await waitForNextUpdate();
    const { bLoading, nstrError } = result.current;

    expect(bLoading).toEqual(false);
    expect(nstrError).toEqual(strMockErrorMessage);
  });
});
