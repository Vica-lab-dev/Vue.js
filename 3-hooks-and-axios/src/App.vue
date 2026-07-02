<template>
  Hello world from main!
  <Products></Products>
</template>

<script>
import Products from "@/components/Products.vue";

export default {
  name: "App",
  components: {Products},
  data() {
    return {

    }
  }
}
</script>