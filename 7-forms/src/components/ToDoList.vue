<template>
  <h1>Hello World</h1>

  <form @submit.prevent="addTask">
    <input v-model="title" type="text" placeholder="Enter a task title" required>
    <input v-model="description" type="text" placeholder="Enter a description" required>
    <input v-model="dueDate" type="date" required>
    <button>Save</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TaskType from "@/Types/TaskType";

export default defineComponent({
  name: "ToDoList",
  data(): {
    title: string
    description: string
    dueDate: string
    tasks: TaskType[]
  } {
    return {
      title: "",
      description: "",
      dueDate: "",
      tasks: []
    }
  },
  methods: {
    addTask() {
      const tempTask = {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate
      }
      this.tasks.push(tempTask);
    }
  }
});
</script>