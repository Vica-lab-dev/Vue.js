<template>
  <router-view></router-view>
  <router-link :to="{name: 'Home'}">Homepage</router-link>
  <router-link :to="{name: 'Products'}">Products</router-link>
</template>

<script>

export default {
  name: "App",
  data() {
    return {

    }
  }
}
</script>