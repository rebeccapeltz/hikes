/* eslint-disable */
<template>
  <div class="hike-edit container">
      <h2>Edit hike</h2>
    <form v-on:submit="updateHike">
      <div class="form-group">
        <label for="edit-name">Name</label>
        <input class="form-control" id="edit-name" v-model="hike.name" required/>
      </div>
      <div class="form-group">
        <label for="edit-link">Link</label>
        <input class="form-control" id="edit-link" v-model="hike.link" required/>
      </div>
      <div class="form-group">
        <label for="edit-elevation">Elevation</label>
        <input class="form-control" id="edit-elevation" v-model="hike.elevation" required/>
      </div>

      <div class="form-group">
        <label for="edit-latitude">Latitude</label>
        <input class="form-control" id="edit-latitude" v-model="hike.latitude" required/>
      </div>
      <div class="form-group">
        <label for="edit-name">Longitude</label>
        <input class="form-control" id="edit-longitude" v-model="hike.longitude" required/>
      </div>
      
      <div class="form-group">
        <label for="edit-length">Length</label>
         <input class="form-control" id="edit-length" v-model="hike.length"/>       
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { hikes, findHike, findHikeKey } from "../data";
export default {
  name: "hikeEdit",
  data() {
    return { hike: findHike(this.$route.params.hike_id), hikes: hikes };
  },
  methods: {
    updateHike: function() {
      var hike = this.hike;
      hikes[findHikeKey(hike.id)] = {
        id: hike.id,
        name: hike.name,
        link: hike.link,
        elevation: hike.elevation,
        latitude: hike.latitude,
        longitude: hike.longitude,
        length: hike.length
      };
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  max-width: 500px;
}

.actions {
  padding: 10px 0;
}
form div {
  margin:auto;
}

</style>
