import React from "react";
import { Typography } from "@material-ui/core";
// components:
import CurrentLocationWeather from "../../components/CurrentLocationWeather";
// styles:
import { useStyles } from "./style";

/**
 * @description current location weather forecast page
 * @returns {JSX} markup
 */
const CurrentLocationPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.currentLocationPage}>
      <Typography variant="h3" component="h1">
        Current weather today
      </Typography>
      <CurrentLocationWeather />
    </div>
  );
};

export default CurrentLocationPage;
