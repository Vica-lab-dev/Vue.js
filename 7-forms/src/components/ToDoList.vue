<template>
  <h1>Hello World</h1>

  <Form ref="taskForm" @submit="addTask">
    <Field
        name="title"
        v-model="title"
        type="text"
        placeholder="Enter a task title"
        rules="required|min:3|startsWithCapital|minWords:5"
    ></Field>
    <ErrorMessage name="title"></ErrorMessage>

    <Field
        name="description"
        v-model="description"
        type="text"
        placeholder="Enter a description"
        rules="required|min:10|max:1000"
    ></Field>
    <ErrorMessage name="description"></ErrorMessage>

    <Field name="dueDate" type="date"></Field>
    <Field name="priority" as="select" v-model="priority">
      <option value="Urgent">Urgent</option>
      <option value="High priority">High priority</option>
      <option value="Medium priority">Medium priority</option>
      <option value="Low priority">Low priority</option>
    </Field>
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
import {Form, Field, ErrorMessage} from "vee-validate";
import {getAllTasks, saveTask, updateAllTasks} from "@/models/tasksModel";
import TaskType from "@/Types/TaskType";

export default defineComponent({
  name: "ToDoList",
  components: {ErrorMessage, Field, Form},
  data(): FormTaskType {
    return {
      title: "",
      description: "",
      dueDate: "",
      priority: null,
      tasks: [] as TaskType[]
    }
  },

  beforeMount() {
    this.tasks = getAllTasks() ?? [];
  },

  watch: {
    tasks: {
      handler(tasks: TaskType[]): void {
        updateAllTasks(tasks);
      },
      deep: true
    },
  },

  methods: {
    resetForm() {
      this.title = "";
      this.description = "";
      this.dueDate = "";
      this.priority = null;

    },
    addTask() {
      getAllTasks();

      const taskExists = this.tasks.some(task => task.title === this.title.trim());

      if(taskExists) {
        alert("This task already exists!");
        return
      }

      const task = {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority,
      }

      this.tasks.push(task)

      this.resetForm();
    },

    deleteTask(index: number) {
      this.tasks.splice(index, 1);
    }
  }
});
</script>