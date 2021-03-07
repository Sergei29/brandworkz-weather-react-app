import React from "react";
import { RouteComponentProps } from "react-router-dom";
// styles:
import { useStyles } from "./style";

/**
 * @description extended weather forecast page
 * @returns {JSX} markup
 */
const ExtendedForecastPage: React.FC<
  RouteComponentProps<{ strLocationName: string }>
> = ({ match }) => {
  const { strLocationName = "" } = match.params;
  return (
    <div>
      <h1>Extended forecast 16days, for {strLocationName}</h1>
    </div>
  );
};

export default ExtendedForecastPage;
