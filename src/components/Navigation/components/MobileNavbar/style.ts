import { makeStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    "& > span > svg": {
      color: "#000",
    },
  },
  mobileNavigation: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  mobileNavLink: {
    "&.active": { color: green[500] },
    textDecoration: "none",
    fontWeight: 800,
    color: "#000",
  },
}));
