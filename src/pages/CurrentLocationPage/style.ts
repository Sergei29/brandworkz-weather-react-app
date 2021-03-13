import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  currentLocationPage: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  pageHeading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
}));
