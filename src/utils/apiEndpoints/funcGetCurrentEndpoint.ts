/**
 * @description generate current weather request endpoint
 * @param {String} strLat location latitude
 * @param {String} strLong location longitude
 * @returns {String} API request endpoint
 */
export const funcGetCurrentEndpoint = (strLat: string, strLong: string) =>
  `/current?lon=${strLong}&lat=${strLat}`;
