<template>
  <router-link :to="{name: 'Home'}">Homepage</router-link>
  <router-link :to="{name: 'Products'}">Products</router-link>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",
  data() {
    return {

    }
  },
  beforeCreate() {
    if(isNaN(this.$route.params.id)) {
      this.$router.replace("/products");
    }
  }
}
</script>