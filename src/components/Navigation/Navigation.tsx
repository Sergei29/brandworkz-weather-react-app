import React from "react";
import { NavLink } from "react-router-dom";
import { arrNavLinks } from "./arrNavLinks";
// styles:
import { useStyles } from "./style";

/**
 * @description navigation bar
 * @returns {JSX} markup
 */
const Navigation: React.FC = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navigation}>
      {arrNavLinks.map(({ intId, strPath, bExact, strName }) => (
        <NavLink
          key={intId}
          to={strPath}
          exact={bExact}
          className={classes.navLink}
        >
          {strName}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
