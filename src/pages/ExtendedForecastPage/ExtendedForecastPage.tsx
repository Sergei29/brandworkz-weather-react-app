import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Typography } from "@material-ui/core";
// components:
import ExtendedForecastByLocation from "../../components/ExtendedForecastByLocation";
// styles:
import { useStyles } from "./style";

/**
 * @description extended weather forecast page
 * @returns {JSX} markup
 */
const ExtendedForecastPage: React.FC<
  RouteComponentProps<{ strLocationName: string }>
> = ({ match }) => {
  const classes = useStyles();
  const { strLocationName = "" } = match.params;
  return (
    <div>
      <Typography variant="h3" component="h1" className={classes.pageHeading}>
        Extended forecast 16days
      </Typography>
      <ExtendedForecastByLocation strLocationName={strLocationName} />
    </div>
  );
};

export default ExtendedForecastPage;
