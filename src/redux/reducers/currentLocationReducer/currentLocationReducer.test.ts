import currentLocationReducer from "./currentLocationReducer";
import {
  actionFetchCurrentStart,
  actionFetchCurrentSuccess,
  actionFetchCurrentFail,
} from "../../actions/currentLocation/actionsCreators";
import { CurrentWeatherStateType } from "../../types/types";
import {
  objCurrentMockResponse,
  strMockErrorMessage,
} from "../../../utils/testData/testData";
import { actionsTypesCurrentWeather } from "../../actions/currentLocation/actionsTypes";

const {
  FETCH_CURRENT_START,
  FETCH_CURRENT_SUCCESS,
  FETCH_CURRENT_FAIL,
} = actionsTypesCurrentWeather;

const objInitialState: Readonly<CurrentWeatherStateType> = {
  bLoading: false,
  nstrError: null,
  arrData: [],
};

describe("currentLocationReducer", () => {
  it(`should handle the ${FETCH_CURRENT_START} event`, () => {
    const objExpected = { ...objInitialState, bLoading: true };
    const objReceived = currentLocationReducer(
      objInitialState,
      actionFetchCurrentStart()
    );

    expect(objReceived).toEqual(objExpected);
  });

  it(`should handle the ${FETCH_CURRENT_SUCCESS} event`, () => {
    const {
      data: { data: arrMockPayload },
    } = objCurrentMockResponse;
    const objExpected = {
      bLoading: false,
      nstrError: null,
      arrData: arrMockPayload,
    };
    const objReceived = currentLocationReducer(
      objInitialState,
      actionFetchCurrentSuccess(arrMockPayload)
    );

    expect(objReceived).toEqual(objExpected);
  });

  it(`should handle the ${FETCH_CURRENT_FAIL} event`, () => {
    const objExpected = { ...objInitialState, nstrError: strMockErrorMessage };
    const objReceived = currentLocationReducer(
      objInitialState,
      actionFetchCurrentFail(strMockErrorMessage)
    );

    expect(objReceived).toEqual(objExpected);
  });
});
