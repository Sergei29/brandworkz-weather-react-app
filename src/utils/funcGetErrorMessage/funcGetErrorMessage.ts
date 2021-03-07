/**
 * @description extract error message from rejected api call
 * @param {Object|String} mixedErrorResponse error response
 * @param {String} strDefaultMessage default message
 * @returns {String} error message
 */
export const funcGetErrorMessage = (
  mixedErrorResponse: Error | Record<string, any> | string,
  strDefaultMessage = "Request failed."
) => {
  if ((mixedErrorResponse as Error).message)
    return (mixedErrorResponse as Error).message;
  if (typeof mixedErrorResponse === "string") {
    return mixedErrorResponse;
  }

  return strDefaultMessage;
};
