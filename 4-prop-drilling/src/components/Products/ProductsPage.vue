<template>
 <DiscountedProducts></DiscountedProducts>
  <ProductDetails></ProductDetails>
</template>

<script>
import ProductDetails from "@/components/Products/ProductDetails.vue";
import DiscountedProducts from "@/components/Products/DiscountedProducts.vue";

export default {
  name: 'ProductsPage',
  components: {DiscountedProducts, ProductDetails},
}
</script>