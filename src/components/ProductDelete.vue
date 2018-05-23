/* eslint-disable */
<template>
  <div class="delete-product container">
       <h2>Delete product {{ product.name }}</h2>
    <form v-on:submit="deleteProduct">
      <p>The action cannot be undone.</p>
      <button type="submit" class="btn btn-danger">Delete</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { products, findProduct, findProductKey } from '../data';
export default {
  name: "ProductDelete",
  data() {
    return { product: findProduct(this.$route.params.product_id),products: products };
  },
  methods: {
    deleteProduct: function() {
      products.splice(findProductKey(this.$route.params.product_id), 1);
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

    .glyphicon-usd {
      font-size: 12px;
    }

</style>
