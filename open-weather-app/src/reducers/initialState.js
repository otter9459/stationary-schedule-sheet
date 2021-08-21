import moment from "moment";

export const initialState = 
{
  "people": [
    {
      "id": 1,
      "name": "person1",
    },
    {
      "id": 2,
      "name": "person2",
    },
    {
      "id": 3,
      "name": "person3",
    },
  ],
  "schedule": [
    "18:00", "14:00", "16:00", "off",
    "06:00", "off",
    "14:00", "09:30", "06:00", "06:00", "14:00", "off",
    "14:00", "06:00", "06:00", "off",
    "09:30", "06:00", "14:00", "06:00", "off",
  ],
  "today": [
    moment().format("YYYY - MM")
  ]
}