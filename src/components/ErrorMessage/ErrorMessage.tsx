import React from "react";
// styles:
import { useStyles } from "./style";

type Props = {
  strErrorMessage: string;
};

/**
 * @description error message display
 * @returns {JSX} markup
 */
const ErrorMessage: React.FC<Props> = ({ strErrorMessage }) => (
  <div>{strErrorMessage}</div>
);

export default ErrorMessage;
