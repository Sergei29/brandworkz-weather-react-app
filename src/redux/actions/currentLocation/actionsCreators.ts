import { actionsTypesCurrentWeather } from "./actionsTypes";
import { ActionType, ThunkActionType } from "../../types/types";
import {
  funcGetCurrentEndpoint,
  axiosWeather,
  funcGetErrorMessage,
} from "../../../utils";

const {
  FETCH_CURRENT_START,
  FETCH_CURRENT_SUCCESS,
  FETCH_CURRENT_FAIL,
} = actionsTypesCurrentWeather;

/**
 * @description action creator function, on start fetch
 * @returns {Object} action
 */
export const actionFetchCurrentStart = (): ActionType => ({
  type: FETCH_CURRENT_START,
});

/**
 * @description action creator function, on fetch success
 * @returns {Object} action
 */
export const actionFetchCurrentSuccess = (
  arrData: Record<string, any>[]
): ActionType => ({
  type: FETCH_CURRENT_SUCCESS,
  payload: arrData,
});

/**
 * @description action creator function, on fetch failure
 * @returns {Object} action
 */
export const actionFetchCurrentFail = (
  strErrorMessage: string
): ActionType => ({
  type: FETCH_CURRENT_FAIL,
  payload: strErrorMessage,
});

/**
 * @description action to fetch current location weather forecast
 * @param {String} strLocationname location name
 * @returns {Function} thunked function, that has curried `dispatch` function that can dispatch actions at different stages of data fetching.
 */
export const actionFetchCurrent = (
  strLocationname: string
): ThunkActionType => async (dispatch) => {
  dispatch(actionFetchCurrentStart());

  try {
    const strEndpoint = funcGetCurrentEndpoint(strLocationname);
    const { data: arrData } = await axiosWeather.get(strEndpoint);

    dispatch(actionFetchCurrentSuccess(arrData));
  } catch (error) {
    const strErrorMessage = funcGetErrorMessage(error);

    dispatch(actionFetchCurrentFail(strErrorMessage));
  }
};
