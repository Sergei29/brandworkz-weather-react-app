import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { actionsTypesCurrentWeather } from "../actions/currentLocation/actionsTypes";
import { actionsTypesExtendedForecast } from "../actions/extendedForecast/actionsTypes";

export type CurrentWeatherStateType = {
  bLoading: boolean;
  nstrError: null | string;
  arrData: Record<string, any>[];
};

export type ExtendedForecastStateType = {
  bLoading: boolean;
  nstrError: null | string;
  arrData: Record<string, any>[];
};

export type AppStateType = {
  objCurrentWeather: CurrentWeatherStateType;
  objExtendedForecast: ExtendedForecastStateType;
};

export type ActionType = {
  type: actionsTypesCurrentWeather & actionsTypesExtendedForecast;
  payload?: string | Record<string, any>[];
};

export type ThunkActionType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  Action<string>
>;

export type DispatchType = Dispatch<Action<string>>;

export type CurrentLocationReducerType = (
  objState: CurrentWeatherStateType | undefined,
  objAction: ActionType
) => CurrentWeatherStateType;

export type ExtendedForecastReducerType = (
  objState: ExtendedForecastStateType | undefined,
  objAction: ActionType
) => ExtendedForecastStateType;
