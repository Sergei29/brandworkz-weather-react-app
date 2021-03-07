import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  weatherApp: {
    display: "flex",
    columnGap: theme.spacing(1),
  },
}));
