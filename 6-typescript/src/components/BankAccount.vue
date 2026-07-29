<template>
  <h1>My name is {{ name }}, and I'm {{ age }} years old</h1>
  <button @click="testChange">Test change</button>
</template>

<script lang="ts">

  import {defineComponent} from "vue";

  export default defineComponent({
    name: "BankAccount",
    data() {
      return {
        name: "Vica" as string,
        age: 28 as number | null
      }
    },
    methods: {
      testChange() {
        this.name = "Marko"
        this.age = 29
      }
    }
  })

</script>