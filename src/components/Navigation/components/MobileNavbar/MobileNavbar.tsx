import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import MobileNavList from "./components/MobileNavList";
// styles:
import { useStyles } from "./style";

/**
 * @description mobile menu bar
 * @returns {JSX} markup
 */
const MobileNavbar: React.FC = () => {
  const [bOpenMenu, setbOpenMenu] = useState<boolean>(false);
  const classes = useStyles();

  /**
   * @description toggles nav menu
   * @returns {undefined} sets state to a reversed value
   */
  const toggleMenu = () => setbOpenMenu((prevBOpen) => !prevBOpen);

  return (
    <Box className={classes.mobileNavigation}>
      <IconButton onClick={toggleMenu} className={classes.iconButton}>
        {bOpenMenu ? (
          <MenuOpenIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </IconButton>
      <Drawer anchor="top" open={bOpenMenu} onClose={toggleMenu}>
        <MobileNavList onItemClick={toggleMenu} />
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
