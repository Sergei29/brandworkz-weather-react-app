import {
  CurrentWeatherStateType,
  CurrentLocationReducerType,
} from "../../types/types";

export const objInitialState: Readonly<CurrentWeatherStateType> = {
  bLoading: false,
  nstrError: null,
  arrData: [],
};

/**
 * @description current location weather state reducer
 * @param {Object} objState current location weather state
 * @param {Object} objAction action fired
 * @returns {Object} updated state
 */
const currentLocationReducer: CurrentLocationReducerType = (
  objState = objInitialState,
  objAction
) => {
  return objState;
};

export default currentLocationReducer;
