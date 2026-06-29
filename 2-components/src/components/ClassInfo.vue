<template>
  <p>Course: {{ className }}</p>
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
        "ReactJS": {
          price: 350,
          length: "3 months",
          numberOfLectures: 24,
        }
      }


    }
  }
}
</script>