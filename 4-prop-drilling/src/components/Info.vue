<template>
  <p>Info component</p>
  <p>Current Date: {{ currentDate }}</p>
</template>

<script>
export default {
  name: "Info",
  props: {
    currentDate: String,
  }
}
</script>