<template>
  <h1>Regular Price</h1>
  <div v-for="product in fullPriceProducts" :key="product.id">
    <p>{{ product.name }}</p>
    <p>${{ product.price }}</p>
  </div>
</template>
<script>

export default {
  name: "ProductDetails",
  inject: ["productList"],
  computed: {
    fullPriceProducts() {
      return this.productList.filter(product => product.discount === null);
    }
  }

}
</script>