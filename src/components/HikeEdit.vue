/* eslint-disable */
<template>
  <div class="product-edit container">
      <h2>Edit product</h2>
    <form v-on:submit="updateProduct">
      <div class="form-group">
        <label for="edit-name">Name</label>
        <input class="form-control" id="edit-name" v-model="product.name" required/>
      </div>
      <div class="form-group">
        <label for="edit-description">Description</label>
        <textarea class="form-control" id="edit-description" rows="3" v-model="product.description"></textarea>
      </div>
      <div class="form-group">
         <input type="number" class="form-control" id="edit-price" v-model="product.price"/>
        <label for="edit-price">Price, <span class="glyphicon glyphicon-usd"></span></label>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { products, findProduct, findProductKey } from '../data';
export default {
  name: 'ProductEdit',
  data () {
     return {product: findProduct(this.$route.params.product_id),products: products};
  },
  methods: {
    updateProduct: function () {
      var product = this.product;
      products[findProductKey(product.id)] = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price
      };
      this.$router.push('/');
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
