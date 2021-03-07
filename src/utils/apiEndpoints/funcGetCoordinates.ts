import { locationCoordinates } from "../../constants/locationsCoordinates";

type CoordinatesType = null | Record<"lat" | "long", string>;

/**
 * @description get coordinates by location name
 * @param {String} strLocationName location name (lowercase)
 * @returns {Object} longitude and latitude coordinates
 */
export const funcGetCoordinates = (
  strLocationName: string
): CoordinatesType => {
  let nObjCoordinates = null;
  if (strLocationName in locationCoordinates) {
    nObjCoordinates = locationCoordinates[strLocationName];
  }

  return nObjCoordinates;
};
