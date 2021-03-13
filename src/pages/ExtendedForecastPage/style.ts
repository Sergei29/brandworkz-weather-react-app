import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  extendedForecastPage: {
    display: "flex",
  },
  pageHeading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
}));
