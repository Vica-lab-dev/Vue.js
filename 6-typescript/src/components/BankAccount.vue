<template>
  <p>Owner: {{ name }}</p>
  <p>Money: {{ amount }}</p>
  <p>Date: {{ attributes.createdAt }}</p>
  <ul v-for="note in attributes.notes" :key="note">
    <li>{{ note.date }} - {{ note.text}}</li>
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
            {
              date: new Date("2026-07-07") ,
              text: "Initial deposit received."
            },
            {
              date: new Date("2026-08-08"),
              text: "Monthly maintenance fee applied."
            }
          ]
        }
      }
    },
  })

</script>