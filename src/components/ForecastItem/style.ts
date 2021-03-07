import { makeStyles, Theme } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  forecastItem: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing(2),
  },
  cardContentRoot: {
    backgroundColor: blueGrey[100],
  },
}));
