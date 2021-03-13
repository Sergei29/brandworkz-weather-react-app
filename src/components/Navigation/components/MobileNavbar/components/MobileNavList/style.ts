import { makeStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  mobileNavListItem: {
    display: "flex",
    justifyContent: "flex-end",
  },
  mobileNavLink: {
    "&.active": { color: green[500] },
    textDecoration: "none",
    fontWeight: 800,
    color: "#000",
    marginRight: theme.spacing(2),
  },
}));
