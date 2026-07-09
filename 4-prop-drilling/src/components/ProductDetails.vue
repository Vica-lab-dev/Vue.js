<template>
  <p>Hello world form details</p>
</template>
<script>
export default {
  name: "ProductDetails",
  inject: ["productList"],
  mounted() {
    console.log(this.productList);
  }
}
</script>