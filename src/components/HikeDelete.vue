/* eslint-disable */
<template>
  <div class="delete-hike container">
       <h2>Delete Hike {{ hike.name }}</h2>
    <form v-on:submit="deleteHike">
      <p>The action cannot be undone.</p>
      <button type="submit" class="btn btn-danger">Delete</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { hikes, findHike, findHikeKey } from '../data';
export default {
  name: "hikeDelete",
  data() {
    return { hike: findHike(this.$route.params.hike_id),hikes: hikes };
  },
  methods: {
    deleteHike: function() {
      hikes.splice(findHikeKey(this.$route.params.hike_id), 1);
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


</style>
