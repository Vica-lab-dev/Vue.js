<template>
  <p>{{ msg }}</p>
  <Info />
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: 'Users',
  components: {Info},
  props: {
    msg: String
  }
}
</script>