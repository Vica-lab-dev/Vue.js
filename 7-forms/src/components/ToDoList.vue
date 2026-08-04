<template>
  <h1>Hello World</h1>

  <Form ref="taskForm" @submit.prevent="addTask">
    <input v-model="title" type="text" placeholder="Enter a task title">
    <input v-model="description" type="text" placeholder="Enter a description">
    <input v-model="dueDate" type="date">
    <select v-model="priority">
      <option>Urgent</option>
      <option>High priority</option>
      <option>Medium priority</option>
      <option>Low priority</option>
    </select>
    <button>Save</button>
  </Form>

  <div>
    <div v-for="(task, index) in tasks" :key="index">
      <p>{{ task.title }} - {{ task.description }} - {{ task.dueDate }} - {{ task.priority }}</p>
      <button @click.prevent="deleteTask(index)">Delete task</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import FormTaskType from "@/Types/FormTaskType";
import {Form, Field} from "vee-validate";

export default defineComponent({
  name: "ToDoList",
  components: {Form},
  data(): FormTaskType {
    return {
      title: "",
      description: "",
      dueDate: "",
      priority: null,
      tasks: []
    }
  },
  methods: {
    checkForm() {
      return !(!this.title || !this.description || !this.dueDate);
    },

    resetForm() {
      this.title = "";
      this.description = "";
      this.dueDate = "";
      this.priority = null;

    },
    addTask() {
      const taskExists = this.tasks.some(task => task.title === this.title.trim());

      if(!this.checkForm()) {
        return alert("This form is not validated!");
      }

      if(taskExists) {
        alert("This task already exists!");
        return
      }

      this.tasks.push({
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority,
      });

      this.resetForm();
    },

    deleteTask(index: number) {
      this.tasks.splice(index, 1);
    }
  }
});
</script>