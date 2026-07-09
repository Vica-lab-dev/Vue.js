<template>
  <p>{{ msg }}</p>
  <Info :currentDate="currentDate" />
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: 'Users',
  components: {Info},
  props: {
    msg: String,
    currentDate: String
  }
}
</script>