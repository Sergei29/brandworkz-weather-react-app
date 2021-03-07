import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  extendedForecast: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
  },
  filterContainer: {
    marginBottom: theme.spacing(2),
  },
  filterControls: {
    display: "flex",
    columnGap: theme.spacing(2),
  },
}));
