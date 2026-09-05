<script setup lang="ts">
  import {defineEmits, defineProps} from 'vue'
  import TaskType from "@/Types/TaskType";

  const props = defineProps<{ task: TaskType | null}>();

  const emit = defineEmits(["close-details"]);
</script>
<template>
  <div class="popup-overlay" @click.self="emit('close-details')">
    <div class="popup">
      <h2>{{ task?.title }}</h2>
      <p>{{ task?.description }}</p>
      <p>{{ task?.dueDate }}</p>
      <button class="close-popup-button" @click="emit('close-details')">Close</button>
    </div>
  </div>
</template>

<style>
.popup {
  position: relative;
  padding: 50px;
  width: 400px;
  height: 400px;
  background: #2678dc;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  z-index: 100;
}
.close-popup-button {
  flex-shrink: 0;
  padding: 8px 12px;
  border: 1px solid white;
  border-radius: 6px;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.close-popup-button:hover {
  background: #dc2626;
  color: white;
}
.popup-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content p {
  color: white;
}
</style>