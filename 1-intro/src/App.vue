<template>
  <h1>Hello {{ name }}</h1>

  <p v-if="professor">User is a professor</p>
  <p v-else>User is not a professor</p>

  <p v-if="age >= 18">User is 18+</p>
  <p v-else>User is not 18+</p>

  <ol>
    <li v-for="singleClass in classes" :key="singleClass">{{ singleClass }}</li>
  </ol>

  <button v-on:click="changeUserType">Change user type</button>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        name: "Vica",
        professor: false,
        age: 28,
        classes: ["JavaScript", "Vue.js", "Node.js", "ReactJS"],
      }
    },
    methods: {
      changeUserType() {
        console.log("changeUserType");
      }
    }
  }
</script>