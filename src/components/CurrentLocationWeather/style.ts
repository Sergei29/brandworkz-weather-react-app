import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  currentLocationWeather: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
  },
}));
