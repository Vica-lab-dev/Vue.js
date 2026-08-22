<script setup lang="ts">
import { defineProps } from "vue";
import TaskType from "@/Types/TaskType";

const props = defineProps<{
  task: TaskType
}>();
</script>
<template>
  <div class="task-card">
    <div class="task-content">
      <h3>{{ task.title }}</h3>

      <p class="task-description">
        {{ task.description }}
      </p>

      <div class="task-meta">
        <span> {{ task.dueDate }}</span>
        <span> {{ task.priority }}</span>
        <span> {{ task.board }}</span>
      </div>
    </div>

    <button
        class="delete-button"
        type="button"
        @click.prevent="deleteTask(id)"
    >
      Delete
    </button>
  </div>
</template>