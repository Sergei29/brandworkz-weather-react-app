import { actionsTypesExtendedForecast } from "./actionsTypes";
import { ActionType, ThunkActionType } from "../../types/types";
import {
  funcGetExtendedEndpoint,
  axiosWeather,
  funcGetErrorMessage,
} from "../../../utils";

const {
  FETCH_EXTENDED_START,
  FETCH_EXTENDED_SUCCESS,
  FETCH_EXTENDED_FAIL,
} = actionsTypesExtendedForecast;

/**
 * @description action creator function, on start fetch
 * @returns {Object} action
 */
export const actionFetchExtendedStart = (): ActionType => ({
  type: FETCH_EXTENDED_START,
});

/**
 * @description action creator function, on fetch success
 * @returns {Object} action
 */
export const actionFetchExtendedSuccess = (
  arrData: Record<string, any>[]
): ActionType => ({
  type: FETCH_EXTENDED_SUCCESS,
  payload: arrData,
});

/**
 * @description action creator function, on fetch failure
 * @returns {Object} action
 */
export const actionFetchExtendedFail = (
  strErrorMessage: string
): ActionType => ({
  type: FETCH_EXTENDED_FAIL,
  payload: strErrorMessage,
});

/**
 * @description action to fetch extended weather forecast by location
 * @param {String} strLocationname location name
 * @returns {Function} thunked function, that has curried `dispatch` function that can dispatch actions at different stages of data fetching.
 */
export const actionFetchExtended = (
  strLocationname: string
): ThunkActionType => async (dispatch) => {
  dispatch(actionFetchExtendedStart());

  try {
    const strEndpoint = funcGetExtendedEndpoint(strLocationname);
    const { data: arrData } = await axiosWeather.get(strEndpoint);

    dispatch(actionFetchExtendedSuccess(arrData));
  } catch (error) {
    const strErrorMessage = funcGetErrorMessage(error);

    dispatch(actionFetchExtendedFail(strErrorMessage));
  }
};
