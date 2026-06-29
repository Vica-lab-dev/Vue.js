<template>
  <p v-if="courseInfo[classNameLower]">Details: {{ className }} - ${{ courseInfo[classNameLower].price }}</p>
  <p v-else>{{ className }} - No information</p>
</template>

<script>
export default {
  name: "ClassInfoComponent",
  props: {
    className: {
      type: String,
      required: true
    }
  },
  computed: {
    classNameLower() {
      return this.className.toLowerCase();
    }
  },
  data() {
    return {
      courseInfo: {
        "javascript": {
          price: 350,
          length: "3 months",
          numberOfLectures: 24,
        },
        "vue.js": {
          price: 350,
          length: "3 months",
          numberOfLectures: 24,
        },
        "node.js": {
          price: 350,
          length: "3 months",
          numberOfLectures: 24,
        },
        "reactjs": {
          price: 350,
          length: "3 months",
          numberOfLectures: 24,
        }
      }


    }
  }
}
</script>