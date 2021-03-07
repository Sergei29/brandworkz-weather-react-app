import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchExtended } from "../../redux/actions/extendedForecast/actionsCreators";
import {
  AppStateType,
  ExtendedForecastStateType,
} from "../../redux/types/types";

type FilterStateType = Record<"nfloatMax" | "nfloatMin", number | null> | null;

/**
 * @description custom hook, fetch 16 days extended weather forecast
 * @param {String} strLocationName loction name (lowercase)
 * @returns {Object} forecast data, fetching status, filter functions
 */
const useExtendedForecast = (strLocationName: string) => {
  const [arrForecast, setArrForecast] = useState<Record<string, any>[]>([]);
  const [nObjFilterCriteria, setnObjFilterCriteria] = useState<FilterStateType>(
    null
  );

  const dispatch = useDispatch();
  const { bLoading, nstrError, arrData } = useSelector<
    AppStateType,
    ExtendedForecastStateType
  >((objAppState) => objAppState.objExtendedForecast);

  /**
   * @description filter forecasts by minimal temperature
   * @param {Number} floatMinTemp minimal temperature
   * @returns {undefined} sets state
   */
  const funcFiltertByMinTemp = useCallback(
    (floatMinTemp: number) =>
      setnObjFilterCriteria(() => ({
        nfloatMin: floatMinTemp,
        nfloatMax: null,
      })),

    []
  );

  /**
   * @description filter forecasts by maximal temperature
   * @param {Number} floatMaxTemp maximal temperature
   * @returns {undefined} sets state
   */
  const funcFilterByMaxTemp = useCallback(
    (floatMaxTemp: number) =>
      setnObjFilterCriteria(() => ({
        nfloatMin: null,
        nfloatMax: floatMaxTemp,
      })),
    []
  );

  /**
   * @description resets back to non-filtered state
   * @returns {undefined} sets state
   */
  const funcResetFilter = useCallback(() => setArrForecast(arrData), [arrData]);

  /**
   * @description effect, fetch forecast on mount
   */
  useEffect(() => {
    dispatch(actionFetchExtended(strLocationName));
  }, [dispatch, strLocationName]);

  /**
   * @description effect, set forecast data when fetched data changes
   */
  useEffect(() => {
    setArrForecast(arrData);
  }, [arrData]);

  useEffect(() => {
    funcResetFilter();
    if (!nObjFilterCriteria) return;
    const { nfloatMax, nfloatMin } = nObjFilterCriteria;

    if (!nfloatMax && !nfloatMin) {
      return funcResetFilter();
    }

    if (nfloatMax !== null) {
      setArrForecast((arrPrevForecast) =>
        arrPrevForecast.filter(
          (objForecast) => objForecast["app_max_temp"] >= nfloatMax
        )
      );
    } else if (nfloatMin !== null) {
      setArrForecast((arrPrevForecast) =>
        arrPrevForecast.filter(
          (objForecast) => objForecast["app_min_temp"] <= nfloatMin
        )
      );
    }
  }, [nObjFilterCriteria, funcResetFilter]);

  return {
    bLoading,
    nstrError,
    arrForecast,
    funcFiltertByMinTemp,
    funcFilterByMaxTemp,
    funcResetFilter,
    nObjFilterCriteria,
  };
};

export default useExtendedForecast;
