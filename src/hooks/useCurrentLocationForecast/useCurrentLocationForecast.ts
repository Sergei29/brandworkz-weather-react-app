import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchCurrent } from "../../redux/actions/currentLocation/actionsCreators";
import { AppStateType, CurrentWeatherStateType } from "../../redux/types/types";

/**
 * @description custom hook, fetch current location weather
 * @param {String} strLocationName loction name (lowercase)
 * @returns {Object} forecast data and fetching status
 */
const useCurrentLocationForecast = (strLocationName: string) => {
  const dispatch = useDispatch();
  const { bLoading, nstrError, arrData } = useSelector<
    AppStateType,
    CurrentWeatherStateType
  >((objAppState) => objAppState.objCurrentWeather);

  useEffect(() => {
    dispatch(actionFetchCurrent(strLocationName));
  }, [dispatch, strLocationName]);

  return { bLoading, nstrError, arrData };
};

export default useCurrentLocationForecast;
