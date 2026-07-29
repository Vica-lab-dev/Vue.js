<template>
  <h1>My name is {{ name }}, and I'm {{ age }} years old</h1>
  <button @click="testChange('Marko', 29)">Test change</button>
</template>

<script lang="ts">

  import {defineComponent} from "vue";

  export default defineComponent({
    name: "BankAccount",
    data(): {
      name: string,
      age: number | null
    } {
      return {
        name: "Vica",
        age: 28
      }
    },
    methods: {
      testChange(newName: string, newAge: number | null) {
        this.name = newName
        this.age = newAge
      }
    }
  })

</script>