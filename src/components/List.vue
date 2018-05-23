/* eslint-disable */
<template>
  <div class="product-list container">
       <div class="actions">
      <router-link class="btn btn-default" v-bind:to="{path: '/add-product'}">
        <span class="glyphicon glyphicon-plus"></span>
        Add product
      </router-link>
    </div>
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">Product name</label>
        <input v-model="searchKey" class="form-control" id="search-element" requred/>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th class="col-sm-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product,index) in filteredProducts" v-bind:key="index">
        <td>
          <router-link v-bind:to="{name: 'product', params: {product_id: product.id}}">{{ product.name }}</router-link>
        </td>
        <td>{{ product.description }}</td>
        <td>
          <span class="glyphicon glyphicon-usd" aria-hidden="true"></span>
          {{ product.price }}
        </td>
        <td>
          <router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'product-edit', params: {product_id: product.id}}">Edit</router-link>
          <router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'product-delete', params: {product_id: product.id}}">Delete</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { products, findProduct, findProductKey } from "../data";
export default {
  name: "List",
  data() {
    return { products: products, searchKey: "" };
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(function(product) {
        return (
          this.searchKey == "" || product.name.indexOf(this.searchKey) !== -1
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

.glyphicon-usd {
  font-size: 12px;
}
</style>
