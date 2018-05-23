var products = [{
    id: 1,
    name: "Angular",
    description: "Superheroic JavaScript MVW Framework.",
    price: 100
  },
  {
    id: 2,
    name: "Ember",
    description: "A framework for creating ambitious web applications.",
    price: 100
  },
  {
    id: 3,
    name: "React",
    description: "A JavaScript Library for building user interfaces.",
    price: 100
  }
];
var hikes = [
  {
  id:1,
  name: "Poo Poo Point",
  link: "https://www.wta.org/go-hiking/hikes/poo-poo-point",
  elevation: "1858 ft",
  latitude: 47.5195, 
  longitude: -122.0299,
  length: "7.2 miles RT"
  },
  {
    id:2,
    name: "Dirty Face Ridge",
    link: "https://www.wta.org/go-hiking/hikes/dirty-face-ridge",
    elevation: "3000 ft",
    latitude: 47.8720, 
    longitude: -123.0889 ,
    length: "7.5 miles RT"
    },
    {
      id:2,
      name: "Mt. Si",
      link: "https://www.wta.org/go-hiking/hikes/mount-si",
      elevation: "3150 ft",
      latitude: 47.4880, 
      longitude: -121.7231  ,
      length: "8 miles RT"
      }
]

function findProduct (productId) {
  return products[findProductKey(productId)];
};

function findHike (hikeId) {
  return hikes[findHikeKey(hikeId)];
};

function findProductKey (productId) {
  for (var key = 0; key < products.length; key++) {
    if (products[key].id === productId) {
      return key;
    }
  }
};
function findHikeKey (hikeId) {
  for (var key = 0; key < hikes.length; key++) {
    if (hikes[key].id === hikeId) {
      return key;
    }
  }
};

export {products, findProduct, findProductKey, hikes,findHike,findHikeKey}
