/* eslint-disable */
<template>
  <div class="hike container">
        <h2>{{ hike.name }}</h2>
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
     <br/>
    <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
    <router-link v-bind:to="'/'">Back to hike list</router-link>
  </div>
</template>

<script>
import { hikes, findHike, findHikeKey } from '../data';
export default {
  name: 'hike',
  data () {
    return {hike: findHike(this.$route.params.hike_id),hikes: hikes};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
      max-width: 500px;
    }

    .actions {
      padding: 10px 0;
    }

  

</style>
