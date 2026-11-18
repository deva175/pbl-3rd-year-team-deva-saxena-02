export const hospitalsData = [
  {
    id: 1,
    name: "District Hospital Bareilly",
    phone: "108",
    distance: "2.5 km",
    type: "Govt",
    beds: 120,
  },
  {
    id: 2,
    name: "City Care Hospital",
    phone: "109",
    distance: "3.1 km",
    type: "Private",
    beds: 80,
  },
  {
    id: 3,
    name: "Trauma Center",
    phone: "112",
    distance: "5.2 km",
    type: "Govt",
    beds: 60,
  },
  {
    id: 4,
    name: "Green Valley Hospital",
    phone: "107",
    distance: "6.0 km",
    type: "Private",
    beds: 150,
  },
  {
    id: 5,
    name: "Sharma Clinic",
    phone: "102",
    distance: "1.8 km",
    type: "Clinic",
    beds: 20,
  },
  {
    id: 6,
    name: "Life Line Hospital",
    phone: "108",
    distance: "4.5 km",
    type: "Private",
    beds: 90,
  },
  {
    id: 7,
    name: "Medical College",
    phone: "106",
    distance: "7.2 km",
    type: "Govt",
    beds: 300,
  },
  {
    id: 8,
    name: "Sunrise Hospital",
    phone: "105",
    distance: "3.8 km",
    type: "Private",
    beds: 70,
  },
];
export function getNearestHospital(list) {
  return list.filter((h) => parseFloat(h.distance) <= 5);
}
