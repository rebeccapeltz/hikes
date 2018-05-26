/* eslint-disable */
<template>
  <div class="hike container text-info">
        <h2>{{ hike.name }}</h2>
      <div class="col-xs-12 col-md-6"> 
    <b>Link: </b>
    <div><a :href="hike.link" target="_blank">{{ hike.link }}</a></div>
    <b>Elevation: </b>
    <div>{{ hike.elevation }}</div>
    <b>Latitude: </b>
    <div>{{ hike.latitude }}</div>
    <b>Longitude: </b>
    <div>{{ hike.longitude }}</div>
    <b>Length: </b>
    <div>{{ hike.length }}</div>
    </div>
    <div class="col-xs-12 col-md-6">
      <div id="map"></div>
      </div>
     <br/>
     <div class="col-xl-12">
    <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
    <router-link v-bind:to="'/'">Back to hike list</router-link>
    </div>
  </div>
</template>

<script>
import { mapList } from "../data";
import {KEY} from "../config";
const loadGoogleMapsApi = require('load-google-maps-api')
export default {
  name: "hike",
  data() {
    return {
      hike: mapList.getItemByKey(this.$route.params.hike_id)
    };
  },
  mounted() {
    loadGoogleMapsApi({key: KEY})
      .then((googleMaps)=> {
        new googleMaps.Map(document.querySelector("#map"), {
          center: {
            lat: this.hike.latitude,
            lng: this.hike.longitude
          },
          zoom: 12
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
};
// AIzaSyCnBaP_WQB9R6-4ilksoMB1VuTEAgJRtco
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  max-width: 500px;
}
.text-info {
  text-align: left;
}
.actions {
  padding: 10px 0;
}
#map {
  height: 400px;
  width: 100%;
}
</style>
