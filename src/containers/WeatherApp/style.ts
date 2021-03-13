import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  weatherApp: {
    minHeight: "100vh",
    paddingBottom: "0.25rem",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}));
