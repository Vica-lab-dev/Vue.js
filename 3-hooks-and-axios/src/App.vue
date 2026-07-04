<template>
  <router-link :to="{name: 'Home'}">Homepage</router-link>
  <router-link :to="{name: 'Products'}">Products</router-link>
  <router-view></router-view>
</template>

<script>

import SingleProduct from "@/components/SingleProduct.vue";

export default {
  name: "App",
  computed: {
    SingleProduct() {
      return SingleProduct
    }
  },
  data() {
    return {

    }
  },
}
</script>