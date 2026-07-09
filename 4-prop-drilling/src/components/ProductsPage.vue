<template>
 <DiscountedProducts></DiscountedProducts>
  <ProductDetails></ProductDetails>
</template>

<script>
import ProductDetails from "@/components/ProductDetails.vue";
import DiscountedProducts from "@/components/DiscountedProducts.vue";

export default {
  name: 'ProductsPage',
  components: {DiscountedProducts, ProductDetails},
}
</script>