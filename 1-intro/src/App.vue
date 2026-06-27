<template>
  <h1>Hello {{ name }}</h1>

  <p v-if="professor">User is a professor</p>
  <p v-else>User is not a professor</p>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        name: "Vica",
        professor: false
      }
    }
  }
</script>