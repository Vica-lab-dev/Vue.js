<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Users msg="Hello prop"></Users>
</template>

<script>
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    Users
  }
}
</script>