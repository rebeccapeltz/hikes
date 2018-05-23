/* eslint-disable */
<template>
  <div class="product container">
        <h2>{{ product.name }}</h2>
    <b>Description: </b>
    <div>{{ product.description }}</div>
    <b>Price:</b>
    <div>{{ product.price }}<span class="glyphicon glyphicon-euro"></span></div>
    <br/>
    <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
    <router-link v-bind:to="'/'">Back to product list</router-link>
  </div>
</template>

<script>
import { products, findProduct, findProductKey } from '../data';
export default {
  name: 'Product',
  data () {
    return {product: findProduct(this.$route.params.product_id),products: products};
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
