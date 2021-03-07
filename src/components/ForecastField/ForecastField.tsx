import React from "react";
import { Typography } from "@material-ui/core";
// style:
import { useStyles } from "./style";

type Props = {
  strFieldName: string;
  mixedFieldValue: number | string;
};

/**
 * @description single forecast field value display
 * @param {String} {strFieldName field name
 * @param {String|Number} mixedFieldValue field value}
 * @returns {JSX} markup
 */
const ForecastField: React.FC<Props> = ({ strFieldName, mixedFieldValue }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.forecastField}>
      <span>{strFieldName}</span>
      <span>{mixedFieldValue}</span>
    </Typography>
  );
};

export default ForecastField;
