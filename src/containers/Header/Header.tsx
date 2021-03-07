import React from "react";
// styles:
import { useStyles } from "./style";

type Props = {
  children: React.ReactNode;
};

/**
 * @description header container
 * @param {Node} {children children nodes}
 * @returns {JSX} markup
 */
const Header: React.FC<Props> = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
