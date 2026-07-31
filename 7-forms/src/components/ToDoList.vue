<template>
  <h1>Hello World</h1>

  <form @submit.prevent="addTask">
    <input v-model="title" type="text" placeholder="Enter a task title" required>
    <input v-model="description" type="text" placeholder="Enter a description" required>
    <input v-model="dueDate" type="date" required>
    <button>Save</button>
  </form>

  <div>
    <div v-for="(task, index) in tasks" :key="index">
      <p>{{task.title}} - {{ task.description }} - {{ task.dueDate }}</p>
    </div>
  </div>
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
      this.tasks.push({
        title: this.title,
        description: this.description,
        dueDate: this.dueDate
      });
    }
  }
});
</script>