import extendedForecastReducer from "./extendedForecastReducer";
import {
  actionFetchExtendedStart,
  actionFetchExtendedSuccess,
  actionFetchExtendedFail,
} from "../../actions/extendedForecast/actionsCreators";
import { ExtendedForecastStateType } from "../../types/types";
import {
  objExtendedMockResponse,
  strMockErrorMessage,
} from "../../../utils/testData/testData";
import { actionsTypesExtendedForecast } from "../../actions/extendedForecast/actionsTypes";

const {
  FETCH_EXTENDED_START,
  FETCH_EXTENDED_SUCCESS,
  FETCH_EXTENDED_FAIL,
} = actionsTypesExtendedForecast;

const objInitialState: Readonly<ExtendedForecastStateType> = {
  bLoading: false,
  nstrError: null,
  arrData: [],
};

describe("extendedForecastReducer", () => {
  it(`should handle the ${FETCH_EXTENDED_START} event`, () => {
    const objExpected = { ...objInitialState, bLoading: true };
    const objReceived = extendedForecastReducer(
      objInitialState,
      actionFetchExtendedStart()
    );

    expect(objReceived).toEqual(objExpected);
  });

  it(`should handle the ${FETCH_EXTENDED_SUCCESS} event`, () => {
    const {
      data: { data: arrMockPayload },
    } = objExtendedMockResponse;
    const objExpected = {
      bLoading: false,
      nstrError: null,
      arrData: arrMockPayload,
    };
    const objReceived = extendedForecastReducer(
      objInitialState,
      actionFetchExtendedSuccess(arrMockPayload)
    );

    expect(objReceived).toEqual(objExpected);
  });

  it(`should handle the ${FETCH_EXTENDED_FAIL} event`, () => {
    const objExpected = { ...objInitialState, nstrError: strMockErrorMessage };
    const objReceived = extendedForecastReducer(
      objInitialState,
      actionFetchExtendedFail(strMockErrorMessage)
    );

    expect(objReceived).toEqual(objExpected);
  });
});
