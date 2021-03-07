import React from "react";
import { RouteComponentProps } from "react-router-dom";
// styles:
import { useStyles } from "./style";

type Props = {
  strLocationName: string;
};

/**
 * @description extended weather forecast by location
 * @returns {JSX} markup
 */
const ExtendedForecastByLocation: React.FC<Props> = ({ strLocationName }) => {
  return <div></div>;
};

export default ExtendedForecastByLocation;
