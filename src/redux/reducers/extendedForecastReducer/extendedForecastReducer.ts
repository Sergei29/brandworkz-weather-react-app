import {
  ExtendedForecastStateType,
  ExtendedForecastReducerType,
} from "../../types/types";

export const objInitialState: Readonly<ExtendedForecastStateType> = {
  bLoading: false,
  nstrError: null,
  arrData: [],
};

/**
 * @description extended forecast state reducer
 * @param {Object} objState extended forecast state
 * @param {Object} objAction action fired
 * @returns {Object} updated state
 */
const extendedForecastReducer: ExtendedForecastReducerType = (
  objState = objInitialState,
  objAction
) => {
  return objState;
};

export default extendedForecastReducer;
