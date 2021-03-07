import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  navigation: {
    display: "flex",
    columnGap: theme.spacing(1),
  },
  navLink: {
    "&.active": { color: theme.palette.secondary.main },
    textDecoration: "none",
    fontWeight: 800,
    color: theme.palette.primary.main,
  },
}));
