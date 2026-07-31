<template>
  <h1>Hello World</h1>

  <form @submit.prevent="addTask">
    <input v-model="taskTitle" type="text" placeholder="Enter a task title" required>
    <button>Save</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ToDoList",
  data(): {
    taskTitle: string
    tasks: Array<string>
  } {
    return {
      taskTitle: "",
      tasks: []
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskTitle);
    }
  }
});
</script>