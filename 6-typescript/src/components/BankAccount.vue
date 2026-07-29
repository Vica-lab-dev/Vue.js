<template>
  <h1>{{ name }}</h1>
  <button @click="testChange">Test change</button>
</template>

<script lang="ts">

  import {defineComponent} from "vue";

  export default defineComponent({
    name: "BankAccount",
    data() {
      return {
        name: "Vica" as string
      }
    },
    methods: {
      testChange() {
        this.name = "Marko"
      }
    }
  })

</script>