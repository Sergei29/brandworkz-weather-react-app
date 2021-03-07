import React from "react";
// styles:
import { useStyles } from "./style";

type Props = {
  children: React.ReactNode;
};

/**
 * @description main content container
 * @param {Node} {children children nodes}
 * @returns {JSX} markup
 */
const Main: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
