import React from "react";
// styles:
import { useStyles } from "./style";

type Props = {
  children: React.ReactNode;
};

/**
 * @description footer container
 * @param {Node} {children children nodes}
 * @returns {JSX} markup
 */
const Footer: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return <footer className={classes.footer}>{children}</footer>;
};

export default Footer;
