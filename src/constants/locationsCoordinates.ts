import { locationsNames } from "./locationsNames";
const { LONDON, NEW_YORK, SYDNEY, TOKYO, MUMBAI } = locationsNames;

export const locationCoordinates: Record<string, any> = {
  [LONDON]: { lat: "51.50", long: "-0.12" },
  [NEW_YORK]: { lat: "40.73", long: "-73.98" },
  [SYDNEY]: { lat: "-33.85", long: "151.21" },
  [TOKYO]: { lat: "34.69", long: "139.40" },
  [MUMBAI]: { lat: "18.93", long: "72.83" },
};
