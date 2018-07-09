/* eslint-disable */
<template>
  <div class="hike-map">
     <div id="map"></div>
  </div>
</template>

<script>
import { KEY } from "../config";
const loadGoogleMapsApi = require("load-google-maps-api");
export default {
  name: "hike-map",
  data() {
    return{};
  },
  // prop names are bound to v-bind:lat and v-bind:long
  props:['lat','long'],
  mounted() {
    loadGoogleMapsApi({ key: KEY })
      .then(googleMaps => {
        new googleMaps.Map(document.querySelector("#map"), {
          center: {
            lat: this.lat,
            lng: this.long
          },
          zoom: 12
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
};
// AIzaSyCnBaP_WQB9R6-4ilksoMB1VuTEAgJRtco
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  height: 400px;
  width: 100%;
}
</style>
