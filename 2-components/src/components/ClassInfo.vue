<template>
  <p v-if="courseInfo[className.toLowerCase()]">Details: {{ className }} - ${{ courseInfo[className.toLowerCase()].price }}</p>
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