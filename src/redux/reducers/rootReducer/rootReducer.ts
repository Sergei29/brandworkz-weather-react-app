import { combineReducers } from "redux";
import currentLocationReducer from "../currentLocationReducer";
import extendedForecastReducer from "../extendedForecastReducer";

const rootReducer = combineReducers({
  objCurrentWeather: currentLocationReducer,
  objExtendedForecast: extendedForecastReducer,
});

export default rootReducer;
