<template>
  <p>Hello World</p>
  <ProductDetails></ProductDetails>
</template>

<script>
import ProductDetails from "@/components/ProductDetails.vue";

export default {
  name: 'ProductsPage',
  components: {ProductDetails},
}
</script>