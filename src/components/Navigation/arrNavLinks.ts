import { locationsNames } from "../../constants/locationsNames";

const { LONDON, NEW_YORK, SYDNEY, TOKYO, MUMBAI } = locationsNames;

export const arrNavLinks = [
  { intId: 0, strPath: "/", bExact: true, strName: "Home" },
  {
    intId: 1,
    strPath: `/extended-forecast/${LONDON}`,
    bExact: true,
    strName: "London",
  },
  {
    intId: 2,
    strPath: `/extended-forecast/${NEW_YORK}`,
    bExact: false,
    strName: "New York",
  },
  {
    intId: 3,
    strPath: `/extended-forecast/${SYDNEY}`,
    bExact: false,
    strName: "Sydney",
  },
  {
    intId: 4,
    strPath: `/extended-forecast/${TOKYO}`,
    bExact: false,
    strName: "Tokyo",
  },
  {
    intId: 5,
    strPath: `/extended-forecast/${MUMBAI}`,
    bExact: false,
    strName: "Mumbai",
  },
];
