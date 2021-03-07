import {
  ExtendedForecastStateType,
  ExtendedForecastReducerType,
} from "../../types/types";
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
  switch (objAction.type) {
    case FETCH_EXTENDED_START:
      return {
        ...objState,
        bLoading: true,
      };

    case FETCH_EXTENDED_SUCCESS:
      return {
        ...objState,
        bLoading: false,
        nstrError: null,
        arrData: objAction.payload as Record<string, any>[],
      };

    case FETCH_EXTENDED_FAIL:
      return {
        ...objState,
        bLoading: false,
        nstrError: objAction.payload as string,
      };

    default:
      return objState;
  }
};

export default extendedForecastReducer;
