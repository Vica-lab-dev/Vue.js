<template>
  {{ productId }}
</template>

<script>
export default {
  computed: {
    productId() {
      return this.$route.params.id;
    }
  }
}
</script>