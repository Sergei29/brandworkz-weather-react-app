import { funcGetCoordinates } from "./funcGetCoordinates";

/**
 * @description generate extended forecast request endpoint
 * @param {String} strLocationName location name (lowercase)
 * @returns {String} API request endpoint
 */
export const funcGetExtendedEndpoint = (strLocationName: string) => {
  const nObjCoordinates = funcGetCoordinates(strLocationName);
  if (!nObjCoordinates) {
    throw new Error("Provided location is not in the list.");
  }

  return `/forecast/daily?lat=${nObjCoordinates.lat}&lon=${nObjCoordinates.long}`;
};
