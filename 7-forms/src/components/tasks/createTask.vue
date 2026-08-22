<script setup lang="ts">
import {ErrorMessage, Field, Form} from "vee-validate";
import { ref , defineEmits} from "vue";

const emit = defineEmits<{(e: "add-task", task: {
    title: string,
    description: string,
    dueDate: string,
    priority: string,
    board: string,
  }): void; }>();

const title = ref("");
const description = ref("");
const dueDate = ref("");
const priority = ref("");
const board = ref("");

function handleSubmit() {
  emit("add-task", {
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    priority: priority.value,
    board: board.value,
  })

  title.value = "";
  description.value = "";
  dueDate.value = "";
  priority.value = "";
  board.value = "";
}

</script>

<template>
  <Form class="task-form" ref="taskForm" @submit="handleSubmit">
    <h2>Create a task</h2>

    <div class="form-group">
      <Field
          class="form-input"
          name="title"
          v-model="title"
          type="text"
          placeholder="Enter a task title"
          rules="required|min:3|startsWithCapital|minWords:5"
      ></Field>
      <ErrorMessage class="error-message" name="title"></ErrorMessage>
    </div>

    <div class="form-group">
      <Field
          class="form-input"
          name="description"
          v-model="description"
          type="text"
          placeholder="Enter a description"
          rules="required|min:10|max:1000"
      ></Field>
      <ErrorMessage class="error-message" name="description"></ErrorMessage>
    </div>

    <div class="form-row">
      <div class="form-group">
        <Field
            class="form-input"
            name="dueDate"
            type="date"
            v-model="dueDate"
        ></Field>
      </div>

      <div class="form-group">
        <Field
            class="form-input"
            name="priority"
            as="select"
            v-model="priority"
        >
          <option value="urgent">Urgent</option>
          <option value="highpriority">High priority</option>
          <option value="mediumpriority">Medium priority</option>
          <option value="lowpriority">Low priority</option>
        </Field>
      </div>
    </div>

    <div class="form-group">
      <Field
          class="form-input"
          name="board"
          as="select"
          v-model="board"
      >
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </Field>
    </div>

    <button class="save-button" type="submit">
      Save task
    </button>
  </Form>
</template>

