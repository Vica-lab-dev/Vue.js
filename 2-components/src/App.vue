<template>
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
    <input ref="classInputName" type="text" placeholder="Enter your class" />
    <button v-on:click="addClass" type="button" value="Add class">Add class</button>
  </form>

  <button v-on:click="changeUserType">Change user type</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Vica",
      professor: false,
      age: 28,
      classes: ["JavaScript", "Vue.js", "Node.js", "ReactJS"],
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
      console.log(className);

      if(className === null || className.trim() === "") {
        return alert("Please enter a valid class!");
      }

      const courses = this.classes.map(value => value.toLowerCase());
      const courseName = className.toLowerCase();

      if(courses.includes(courseName)) {
        return alert("The class name already exists!");
      }

      this.classes.push(className);
    }
  }
}
</script>