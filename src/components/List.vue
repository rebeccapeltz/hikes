/* eslint-disable */
<template>
  <div class="hike-list container">
      
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">Hike Name</label>
        <input v-model="searchKey" class="form-control" id="search-element" requred/>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr class="m-0">
        <th class="w-20">Name</th>
        <th class="w-10">Elevation</th>
        <th class="w-10">Latitude</th>
        <th class="w-10">Longitude</th>
        <th class="w-20">Length</th>
        <th class="w-30">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(hike,index) in filteredHikes" v-bind:key="index">
        <td>
          <router-link v-bind:to="{name: 'hike', params: {hike_id: hike.id}}">{{ hike.name }}
            </router-link>
          <a target="_blank" v-bind:href="hike.link"><span class="glyphicon glyphicon-info-sign"></span></a>

        </td>
  
        <td>
          {{ hike.elevation }}
        </td>
         <td>
          {{ hike.latitude }}
        </td>
         <td>
          {{ hike.longitude }}
        </td>
         <td>
          {{ hike.length }}
        </td>
        <td>
          <router-link class="btn btn-success btn-xs" v-bind:to="{name: 'hike-edit', params: {hike_id: hike.id}}">Edit</router-link>
          <router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'hike-delete', params: {hike_id: hike.id}}">Delete</router-link>
        </td>
      </tr>
      </tbody>
       <div class="actions">
      <router-link tag="button" class="btn btn-default" v-bind:to="{path: '/add-hike'}">
        <button><i class="fas fa-plus"><span class="btn-text">Add hike</span></i></button>
      </router-link>
    </div>
    </table>
  </div>
</template>

<script>
import { mapList } from "../data";
export default {
  name: "List",
  data() {
    return { 
      hikes: mapList, 
      searchKey: "" 
      };
  },
  computed: {
    filteredHikes: function() {
      let search = this.searchKey.toLowerCase();
      return this.hikes.asList().filter((hike)=> {
        return (
          search.length === 0 ||
          hike.name.toLowerCase().indexOf(search) !== -1
        );
      }, this);
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
  text-align: left;
}
th {
  text-align: center;
}
tr td:first-child {
  text-align: left;
  padding-left: 30px;
}
.btn-text {
  font-family:Arial, Helvetica, sans-serif;
}

</style>
