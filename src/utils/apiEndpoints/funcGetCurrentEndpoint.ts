import { funcGetCoordinates } from "./funcGetCoordinates";

/**
 * @description generate current weather request endpoint
 * @param {String} strLocationName location name (lowercase)
 * @returns {String} API request endpoint
 */
export const funcGetCurrentEndpoint = (strLocationName: string) => {
  const nObjCoordinates = funcGetCoordinates(strLocationName);
  if (!nObjCoordinates) {
    throw new Error("Provided location is not in the list.");
  }

  return `/current?lon=${nObjCoordinates.long}&lat=${nObjCoordinates.lat}`;
};
