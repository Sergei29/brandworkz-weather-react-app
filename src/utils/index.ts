import { funcGetCurrentEndpoint } from "./apiEndpoints/funcGetCurrentEndpoint";
import { funcGetExtendedEndpoint } from "./apiEndpoints/funcGetExtendedEndpoint";
import { axiosWeather } from "./axiosInstance/axiosInstance";
import { funcGetCoordinates } from "./apiEndpoints/funcGetCoordinates";
import { funcGetErrorMessage } from "./funcGetErrorMessage/funcGetErrorMessage";

export {
  axiosWeather,
  funcGetCurrentEndpoint,
  funcGetExtendedEndpoint,
  funcGetCoordinates,
  funcGetErrorMessage,
};
