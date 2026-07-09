<template>
  <h1>Discounted Products</h1>
  <div class="background color" v-for="product in discountedProducts" :key="product.id">
    <ProductInfo :product="product"></ProductInfo>
  </div>
</template>

<script>
import ProductInfo from "@/components/Products/ProductInfo.vue";

export default {
  name: "DiscountedProducts",
  components: {ProductInfo},
  inject: ['productList'],
  computed: {
    discountedProducts() {
      return this.productList.filter(product => product.discount !== null)
    }
  },
}
</script>

<style>
  .background {
    background-color: red;
  }
  .color {
    color: white;
  }
</style>