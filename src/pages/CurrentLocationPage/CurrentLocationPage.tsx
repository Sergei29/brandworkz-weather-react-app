import React from "react";
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
      <h1>London weather today</h1>
    </div>
  );
};

export default CurrentLocationPage;
