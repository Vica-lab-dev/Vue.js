<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Users msg="Hello prop" :currentDate="currentDate"></Users>
</template>

<script>
import Users from './components/Users.vue'

export default {
  name: 'App',
  data: () => ({
    currentDate: "09/07/2026"
  }),
  components: {
    Users
  }
}
</script>