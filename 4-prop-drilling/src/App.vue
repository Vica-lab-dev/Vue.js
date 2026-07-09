<template>
  <ProductsPage></ProductsPage>
</template>

<script>

import ProductsPage from "@/components/ProductsPage.vue";

export default {
  name: 'App',
  components: {ProductsPage},
  provide () {
    return {
      productList: this.productList
    }
  },
  data: () => ({
    productList: [
      {
        id: 1,
        name: "HTML Course",
        price: 150,
        length: "3 months"
      },
      {
        id: 2,
        name: "CSS Masterclass",
        price: 180,
        length: "4 months"
      },
      {
        id: 3,
        name: "JavaScript Bootcamp",
        price: 250,
        length: "6 months"
      },
      {
        id: 4,
        name: "Vue.js Fundamentals",
        price: 220,
        length: "5 months"
      },
      {
        id: 5,
        name: "Node.js Backend Development",
        price: 300,
        length: "7 months"
      }
    ]
  }),

}
</script>