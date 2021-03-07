import React from "react";
import { Card, CardContent } from "@material-ui/core";
import ForecastField from "../ForecastField";
// style:
import { useStyles } from "./style";

type Props = {
  objForecast: Record<string, any>;
};

const ExtendedForecastItem: React.FC<Props> = ({ objForecast }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent
        className={classes.extendedForecastItem}
        classes={{ root: classes.cardContentRoot }}
      >
        <ForecastField
          strFieldName="Location"
          mixedFieldValue={objForecast["city_name"]}
        />
        <ForecastField
          strFieldName="Date"
          mixedFieldValue={objForecast["valid_date"]}
        />

        <ForecastField
          strFieldName="Weather type"
          mixedFieldValue={objForecast["weather"]["description"]}
        />
        <ForecastField
          strFieldName="Temperature max"
          mixedFieldValue={objForecast["app_max_temp"]}
        />
        <ForecastField
          strFieldName="Temperature min"
          mixedFieldValue={objForecast["app_min_temp"]}
        />
      </CardContent>
    </Card>
  );
};

export default ExtendedForecastItem;
