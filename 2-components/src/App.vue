<template>
  <Navigation></Navigation>
  <ClassInfoComponent :className="'ReactJS'"></ClassInfoComponent>

  <h1>Hello {{ name }}</h1>

  <p v-if="professor">User is a professor</p>
  <p v-else>User is not a professor</p>

  <p v-if="age >= 18">User is 18+</p>
  <p v-else>User is not 18+</p>

  <ol>
    <li v-on:click="deleteClass(singleClass)" v-for="singleClass in classes" :key="singleClass">{{ singleClass }}</li>
  </ol>

  <form @submit.prevent>
    <input v-model="name" type="text" placeholder="Enter your name" />
  </form>

  <form @submit.prevent>
    <input ref="classInputName" v-on:keyup="checkClassNameValidity" type="text" placeholder="Enter your class" />
    <button :disabled="disabledClassButton" v-on:click="addClass" type="button" value="Add class">Add class</button>
  </form>

  <button v-on:click="changeUserType">Change user type</button>
</template>

<script>

import Navigation from "@/components/Navigation.vue";
import ClassInfoComponent from "@/components/ClassInfo.vue";

export default {
  name: "App",
  components: {Navigation, ClassInfoComponent},
  data() {
    return {
      name: "Vica",
      professor: false,
      age: 28,
      classes: ["JavaScript", "Vue.js", "Node.js", "ReactJS"],
      disabledClassButton: true,
    }
  },
  methods: {
    changeUserType() {
      this.professor = !this.professor;
    },

    deleteClass(name) {
      const index = this.classes.indexOf(name);
      this.classes.splice(index, 1)
    },

    addClass() {
      const className = this.$refs.classInputName.value;

      this.classes.push(className);
    },

    checkClassNameValidity() {
      const className = this.$refs.classInputName.value;
      const courses = this.classes.map(value => value.toLowerCase());
      const courseName = className.toLowerCase();

      if(className === null || className.trim() === "") {
        this.disabledClassButton = true;
      } else if(courses.includes(courseName)) {
        this.disabledClassButton = true;
      } else {
        this.disabledClassButton = false;
      }
    }

  }
}
</script>