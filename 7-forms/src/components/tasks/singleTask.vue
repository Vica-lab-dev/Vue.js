<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import TaskType from "@/Types/TaskType";

const props = defineProps<{
  task: TaskType
}>();

const emit = defineEmits<{
  (e: "delete-task", id: string): void;
  (e: "show-popup", task: TaskType): void;
}>();

function handleDelete() {
  emit("delete-task", props.task.id);
}

function handleShowPopup() {
  emit("show-popup", props.task);
}
</script>

<template>
  <div class="task-card">
    <div class="task-content">
      <h3>{{ task.title }}</h3>

      <p class="task-description">
        {{ task.description }}
      </p>

      <div class="task-meta">
        <span>{{ task.dueDate }}</span>
        <span>{{ task.priority }}</span>
        <span>{{ task.board }}</span>
      </div>
    </div>

    <button class="popup-button" type="button" @click="handleShowPopup">Details</button>

    <button
        class="delete-button"
        type="button"
        @click.prevent="handleDelete"
    >
      Delete
    </button>
  </div>
</template>

<style>
  .task-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 18px 20px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .task-content {
    min-width: 0;
  }

  .task-content h3 {
    margin: 0 0 7px;
    font-size: 17px;
  }
  .task-description {
    margin: 0 0 12px;
    color: #666;
    line-height: 1.5;
  }
  .task-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .task-meta span {
    padding: 5px 9px;
    border-radius: 5px;
    background: #f3f4f6;
    color: #555;
    font-size: 12px;
  }
  .delete-button {
    flex-shrink: 0;
    padding: 8px 12px;
    border: 1px solid #dc2626;
    border-radius: 6px;
    background: transparent;
    color: #dc2626;
    cursor: pointer;
    transition: all 0.2s;
  }
  .delete-button:hover {
    background: #dc2626;
    color: white;
  }
  .popup-button {
    flex-shrink: 0;
    padding: 8px 12px;
    border: 1px solid #2678dc;
    border-radius: 6px;
    background: transparent;
    color: #2678dc;
    cursor: pointer;
    transition: all 0.2s;
  }
</style>