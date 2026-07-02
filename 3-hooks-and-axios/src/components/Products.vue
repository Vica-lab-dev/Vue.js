<template>
  <p v-if="!fetchedProducts.length">Loading products...</p>
  <p v-if="apiError"> {{ apiError }}</p>

  <ul v-if="fetchedProducts.length">
    <li v-for="product in fetchedProducts" :key="product.id">
      {{ product.title }} - ${{ product.price }} - Stock: {{ product.stock }}
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: 'Products',

  data() {
    return {
      isLoading: true,
      fetchedProducts: [],
      apiError: null,
    };
  },

  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    axios.get("https://dummyjson.com/products")
        .then(response => this.fetchedProducts = response.data.products)
        .catch(() => this.apiError = "Failed to load products. Please try again later.")
  },
}
</script>