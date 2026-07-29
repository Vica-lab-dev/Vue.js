<template>
  <p>Owner: {{ name }}</p>
  <p>Money: {{ amount }}</p>
  <p>Date: {{ attributes.createdAt }}</p>
  <ul v-for="note in attributes.notes" :key="note">
    <li>{{ note }}</li>
  </ul>
</template>

<script lang="ts">

  import {defineComponent} from "vue";
  import AccountAttributes from "@/types/AccountAttributes";

  export default defineComponent({
    name: "BankAccount",
    data(): {
      name: string,
      amount: number | null,
      attributes: AccountAttributes
    } {
      return {
        name: "Vica M.",
        amount: 5000.05,
        attributes: {
          createdAt: "02.02.2002",
          notes: [
            "Account opened successfully.",
            "Monthly maintenance fee applied."
          ]
        }
      }
    },
  })

</script>