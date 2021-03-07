import { useEffect, useState, useCallback } from "react";

const useExtendedSortedForecast = (arrForecastData: Record<string, any>[]) => {
  const [arrForecast, setArrForecast] = useState<Record<string, any>[]>([]);

  const funcFiltertByMinTemp = (floatMinTemp: number) =>
    setArrForecast((arrPrevForecast) =>
      arrPrevForecast.filter(
        (objForecast) => objForecast["app_min_temp"] >= floatMinTemp
      )
    );

  const funcFilterByMaxTemp = (floatMaxTemp: number) =>
    setArrForecast((arrPrevForecast) =>
      arrPrevForecast.filter(
        (objForecast) => objForecast["app_max_temp"] <= floatMaxTemp
      )
    );

  useEffect(() => {
    setArrForecast(arrForecastData);
  }, [arrForecastData]);

  return {};
};

export default useExtendedSortedForecast;
