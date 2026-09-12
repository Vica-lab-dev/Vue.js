<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { ref, defineEmits } from "vue";

const emit = defineEmits<{
  (e: "add-task", task: {
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    board: string;
  }): void;

  (e: "close-popup"): void;
}>();

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
  });

  title.value = "";
  description.value = "";
  dueDate.value = "";
  priority.value = "";
  board.value = "";
}
</script>

<template>
  <div class="popup-overlay">
    <div class="create-task-popup">
      <Form class="task-form" @submit="handleSubmit">
        <h2>Create a task</h2>

        <div class="form-group">
          <Field
              class="form-input"
              name="title"
              v-model="title"
              type="text"
              placeholder="Enter a task title"
              rules="required|min:3|startsWithCapital|minWords:5"
          />
          <ErrorMessage
              class="error-message"
              name="title"
          />
        </div>

        <div class="form-group">
          <Field
              class="form-input"
              name="description"
              v-model="description"
              type="text"
              placeholder="Enter a description"
              rules="required|min:10|max:1000"
          />
          <ErrorMessage
              class="error-message"
              name="description"
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <Field
                class="form-input"
                name="dueDate"
                type="date"
                v-model="dueDate"
            />
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

        <button
            type="button"
            class="closePopupButton"
            @click="emit('close-popup')"
        >
          Close
        </button>
      </Form>
    </div>
  </div>
</template>

<style>
.popup-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
}
.create-task-popup {
  position: relative;
  width: 500px;
  max-width: 90%;
  padding: 25px;
  box-sizing: border-box;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}
.task-form {
  width: 100%;
  box-sizing: border-box;
}
.task-form h2 {
  margin: 0 0 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.form-input {
  width: 100%;
  box-sizing: border-box;
  padding: 11px 13px;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.form-input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.error-message {
  margin-top: 5px;
  font-size: 13px;
  color: #dc2626;
}
.save-button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 7px;
  background: #4f46e5;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
.save-button:hover {
  background: #4338ca;
}
.closePopupButton {
  display: block;
  margin: 15px 0 0 auto;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #dc2626;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.closePopupButton:hover {
  background: #b91c1c;
}
</style>