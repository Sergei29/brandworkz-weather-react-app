import { makeStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  navigation: {
    display: "flex",
    columnGap: theme.spacing(1),
  },
  navLink: {
    "&.active": { color: green[500] },
    textDecoration: "none",
    fontWeight: 800,
    color: "#000",
  },
}));
