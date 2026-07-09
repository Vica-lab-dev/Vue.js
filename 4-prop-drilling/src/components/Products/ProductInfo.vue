<template>
  <p>{{ product.name }}</p>
  <p class="oldPrice">${{ product.price }}</p>
  <p class="newPrice">New price: ${{ discountedPrice }}</p>
</template>

<script>
export default {
  name: "ProductInfo",
  props: {
    product: Object,
  },
  computed: {
    discountedPrice() {
      const discount = parseFloat(this.product.discount);
      return this.product.price * (1 - discount / 100);
    }
  }
}
</script>

<style>
  .oldPrice {
    text-decoration: line-through;
  }
  .newPrice {
    color: blue;
  }
</style>