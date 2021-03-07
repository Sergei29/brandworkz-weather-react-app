import React from "react";
import {
  Typography,
  Grid,
  TextField,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import { useExtendedForecast } from "../../hooks";
//components:

import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import ExtendedForecastItem from "../ExtendedForecastItem";
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
  const classes = useStyles();
  const {
    bLoading,
    nstrError,
    arrForecast,
    funcFilterByMaxTemp,
    funcFiltertByMinTemp,
    funcResetFilter,
    nObjFilterCriteria,
  } = useExtendedForecast(strLocationName);

  /**
   *@description render fetched data
   * @returns {JSX} markup, 16 forecasts
   */
  const renderForecast = () => {
    if (bLoading) return <Loader />;
    if (nstrError) return <ErrorMessage strErrorMessage={nstrError} />;
    if (arrForecast.length === 0) {
      return <Typography>No forecast data available.</Typography>;
    }

    return arrForecast.map((objForecast) => (
      <Grid item xs={12} sm={6} lg={3} xl={4} key={objForecast["valid_date"]}>
        <ExtendedForecastItem objForecast={objForecast} />
      </Grid>
    ));
  };

  /**
   * @description callback on input change
   * @param {Object} objEvent input change event
   * @returns {undefined} sets state
   */
  const handleChangeFilterByMin = (
    objEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = objEvent.target;
    const floatValue = parseFloat(value);
    if (isNaN(floatValue)) {
      return funcFiltertByMinTemp(0);
    }
    funcFiltertByMinTemp(floatValue);
  };

  /**
   * @description callback on input change
   * @param {Object} objEvent input change event
   * @returns {undefined} sets state
   */
  const handleChangeFilterByMax = (
    objEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = objEvent.target;
    const floatValue = parseFloat(value);
    if (isNaN(floatValue)) {
      return funcFilterByMaxTemp(0);
    }
    funcFilterByMaxTemp(floatValue);
  };

  return (
    <div className={classes.extendedForecast}>
      <Card className={classes.filterContainer}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Filter:
          </Typography>
          <div className={classes.filterControls}>
            <TextField
              type="number"
              label="By max temperature"
              variant="outlined"
              onChange={handleChangeFilterByMax}
              value={nObjFilterCriteria?.nfloatMax || 0}
            />
            <TextField
              type="number"
              label="By min temperature"
              variant="outlined"
              onChange={handleChangeFilterByMin}
              value={nObjFilterCriteria?.nfloatMin || 0}
            />
            <Button onClick={funcResetFilter}>reset</Button>
          </div>
        </CardContent>
      </Card>
      <Grid container spacing={3}>
        {renderForecast()}
      </Grid>
    </div>
  );
};

export default ExtendedForecastByLocation;
