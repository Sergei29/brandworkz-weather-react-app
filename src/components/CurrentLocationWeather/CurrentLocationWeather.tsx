import React from "react";
import { Typography } from "@material-ui/core";
import { useCurrentLocationForecast } from "../../hooks";
import { locationsNames } from "../../constants/locationsNames";
// components:
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import ForecastItem from "../ForecastItem";
// styles:
import { useStyles } from "./style";

/**
 * @description curent location display weather forecast
 * @returns {JSX} markup
 */
const CurrentLocationWeather: React.FC = () => {
  const classes = useStyles();

  const { bLoading, nstrError, arrData } = useCurrentLocationForecast(
    locationsNames.LONDON
  );

  const renderForecast = () => {
    if (bLoading) return <Loader />;
    if (nstrError) return <ErrorMessage strErrorMessage={nstrError} />;
    const objForecast = arrData[0];
    if (!objForecast)
      return <Typography>No forecast data available.</Typography>;
    return <ForecastItem objForecast={objForecast} />;
  };

  return (
    <div className={classes.currentLocationWeather}>{renderForecast()}</div>
  );
};

export default CurrentLocationWeather;
