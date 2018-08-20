import MapList from 'map-list'
var hikes = [
  {
    id: 1,
    name: "Poo Poo Point",
    link: "https://www.wta.org/go-hiking/hikes/poo-poo-point",
    elevation: "1858 ft",
    latitude: 47.5195,
    longitude: -122.0299,
    length: "7.2 miles RT"
  },
  {
    id: 2,
    name: "Dirty Face Ridge",
    link: "https://www.wta.org/go-hiking/hikes/dirty-face-ridge",
    elevation: "3000 ft",
    latitude: 47.8720,
    longitude: -123.0889,
    length: "7.5 miles RT"
  },
  {
    id: 3,
    name: "Mt. Si",
    link: "https://www.wta.org/go-hiking/hikes/mount-si",
    elevation: "3150 ft",
    latitude: 47.4880,
    longitude: -121.7231,
    length: "8 miles RT"
  },
  {
    id: 4,
    name: "Dirtyface Lookout and Peak",
    link: "https://www.wta.org/go-hiking/hikes/dirtyface-lookout-site",
    elevation: "3950  ft",
    latitude: 47.8379,
    longitude: -120.7976,
    length: "9 miles RT"
  }
]
const mapList = new MapList("id");
hikes.forEach(hike => {
  mapList.add(hike);
});
export { mapList }