import React from "react";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { arrNavLinks } from "../../../../arrNavLinks";
// styles:
import { useStyles } from "./style";

type Props = {
  onItemClick: () => void;
};

/**
 * @description mobile menu nav links
 * @param {Function} {onItemClick callback on click list item}
 * @returns {JSX} markup
 */
const MobileNavList: React.FC<Props> = ({ onItemClick }) => {
  const classes = useStyles();
  return (
    <List>
      {arrNavLinks.map(({ strName, strPath, intId, bExact }) => (
        <ListItem
          component="div"
          key={intId}
          className={classes.mobileNavListItem}
        >
          <NavLink
            to={strPath}
            exact={bExact}
            className={classes.mobileNavLink}
            onClick={onItemClick}
          >
            {strName}
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MobileNavList;
