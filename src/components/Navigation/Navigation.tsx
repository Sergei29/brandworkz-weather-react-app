import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import MobileNavbar from "./components/MobileNavbar";
import { arrNavLinks } from "./arrNavLinks";
// styles:
import { useStyles } from "./style";

/**
 * @description navigation bar
 * @returns {JSX} markup
 */
const Navigation: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const bIsMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const renderDesktopNavLinks = () =>
    arrNavLinks.map(({ intId, strPath, bExact, strName }) => (
      <NavLink
        key={intId}
        to={strPath}
        exact={bExact}
        className={classes.navLink}
      >
        {strName}
      </NavLink>
    ));

  return (
    <nav className={classes.navigation}>
      {bIsMobile ? <MobileNavbar /> : renderDesktopNavLinks()}
    </nav>
  );
};

export default Navigation;
