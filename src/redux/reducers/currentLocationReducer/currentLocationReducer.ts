import {
  CurrentWeatherStateType,
  CurrentLocationReducerType,
} from "../../types/types";
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
  switch (objAction.type) {
    case FETCH_CURRENT_START:
      return {
        ...objState,
        bLoading: true,
      };

    case FETCH_CURRENT_SUCCESS:
      return {
        ...objState,
        bLoading: false,
        nstrError: null,
        arrData: objAction.payload as Record<string, any>[],
      };

    case FETCH_CURRENT_FAIL:
      return {
        ...objState,
        bLoading: false,
        nstrError: objAction.payload as string,
      };

    default:
      return objState;
  }
};

export default currentLocationReducer;
