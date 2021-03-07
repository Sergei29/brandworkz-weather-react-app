/**
 * @description generate extended forecast request endpoint
 * @param {String} strLat location latitude
 * @param {String} strLong location longitude
 * @returns {String} API request endpoint
 */
export const funcGetExtendedEndpoint = (strLat: string, strLong: string) =>
  `/forecast/daily?lat=${strLat}&lon=${strLong}`;
