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
import { mapList } from '../data';
export default {
  name: "hikeDelete",
  data() {
    return { hike: mapList.getItemByKey(this.$route.params.hike_id),hikes: mapList };
  },
  methods: {
    deleteHike: function() {
      this.hikes.remove(this.hike.id)
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
