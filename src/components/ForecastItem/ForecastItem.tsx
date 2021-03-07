import React from "react";
import { Card, CardContent } from "@material-ui/core";
import ForecastField from "../ForecastField";
// style:
import { useStyles } from "./style";

type Props = {
  objForecast: Record<string, any>;
};

/**
 * @description forecast item display
 * @param {Object} {objForecast forecast data}
 * @returns {JSX} markup
 */
const ForecastItem: React.FC<Props> = ({ objForecast }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent
        className={classes.forecastItem}
        classes={{ root: classes.cardContentRoot }}
      >
        <ForecastField
          strFieldName="Location"
          mixedFieldValue={objForecast["city_name"]}
        />
        <ForecastField
          strFieldName="Time"
          mixedFieldValue={objForecast["ob_time"]}
        />

        <ForecastField
          strFieldName="Weather type"
          mixedFieldValue={objForecast["weather"]["description"]}
        />
        <ForecastField
          strFieldName="Temperature average"
          mixedFieldValue={objForecast["app_temp"]}
        />
        <ForecastField
          strFieldName="Wind speed/direction"
          mixedFieldValue={`${objForecast["wind_spd"]}m / ${objForecast["wind_cdir_full"]}`}
        />
        <ForecastField
          strFieldName="Sunset time"
          mixedFieldValue={objForecast["sunset"]}
        />
        <ForecastField
          strFieldName="Sunrise time"
          mixedFieldValue={objForecast["sunrise"]}
        />
      </CardContent>
    </Card>
  );
};

export default ForecastItem;
