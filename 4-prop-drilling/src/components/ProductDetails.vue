<template>
  <p>Hello world form details</p>
  <ul>
    <li v-for="product in productList" :key="product.id">
      {{ product.name }} - ${{ product.price }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "ProductDetails",
  inject: ["productList"],
}
</script>