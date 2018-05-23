/* eslint-disable */
<template>
  <div class="add-product container">
       <h2>Add new product</h2>
    <form v-on:submit="createProduct">
      <div class="form-group">
        <label for="add-name">Name</label>
        <input class="form-control" id="add-name" v-model="product.name" required/>
      </div>
      <div class="form-group">
        <label for="add-description">Description</label>
        <textarea class="form-control" id="add-description" rows="10" v-model="product.description"></textarea>
      </div>
      <div class="form-group">
        <label for="add-price">Price, <span class="glyphicon glyphicon-usd"></span></label>
        <input type="number" class="form-control" id="add-price" v-model="product.price"/>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { products, findProduct, findProductKey } from '../data';
export default {
  name: 'AddProduct',
  data () {
    return {product: {name: '', description: '', price: ''},
    products: products}
  },
  methods: {
    createProduct: function () {
      var product = this.product
      products.push({
        id: Math.random().toString().split('.')[1],
        name: product.name,
        description: product.description,
        price: product.price
      })
      this.$router.push('/')
    }
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

    .glyphicon-usd {
      font-size: 12px;
    }

</style>
