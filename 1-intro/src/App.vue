<template>
  <h1>Hello {{ name }}</h1>

  <p v-if="professor">User is a professor</p>
  <p v-else>User is not a professor</p>

  <p v-if="age >= 18">User is 18+</p>
  <p v-else>User is not 18+</p>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        name: "Vica",
        professor: false,
        age: 28,
      }
    }
  }
</script>