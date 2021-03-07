import React from "react";
import { RouteComponentProps } from "react-router-dom";
// styles:
import { useStyles } from "./style";

type Props = {} & RouteComponentProps<{ id: string }>;

/**
 * @description extended weather forecast by location
 * @returns {JSX} markup
 */
const ExtendedForecastByLocation: React.FC<Props> = ({ match }) => {
  const locationName = match.params.id;
  return <div></div>;
};

export default ExtendedForecastByLocation;
