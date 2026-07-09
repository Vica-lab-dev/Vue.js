<template>
  <h1>Discounted Products</h1>
  <ul>
    <li v-for="product in discountedProducts" :key="product.id">
      {{ product.name }} - ${{ product.price }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "DiscountedProducts",
  inject: ['productList'],
  computed: {
    discountedProducts() {
      return this.productList.filter(product => product.discount !== null)
    }
  }
}
</script>