<script setup lang="ts">
import {defineEmits, defineProps, ref} from "vue";
import {BoardType} from "@/Types/boards/BoardType";
import TaskType from "@/Types/TaskType";
import SingleTask from "@/components/tasks/singleTask.vue";
import PopupTask from "@/components/tasks/popupTask.vue";

const showPopup = ref(false);

const selectedTask = ref<TaskType | null>(null);

function openPopup(task: TaskType) {
  showPopup.value = true;
  selectedTask.value = task;
  console.log(selectedTask);
}

const props = defineProps<{
  groupedTasks: Record<BoardType, TaskType[]>
}>();

const emit = defineEmits<{(e: "delete-task", id: string): void; }>();

function closePopup() {
  showPopup.value = false;
  selectedTask.value = null;
}

</script>

<template>
  <div class="allTasks">
    <div
        class="task-group"
        v-for="(tasksInGroup, index) in groupedTasks"
        :key="index"
    >
      <h2 class="group-title">{{ index }}</h2>

      <div class="task-list">
        <SingleTask v-for="task in tasksInGroup"
        :key="task.id" :task="task"
        @delete-task="emit('delete-task', $event)"
        @show-popup="openPopup"
        ></SingleTask>
      </div>
    </div>
  </div>

  <PopupTask v-if="showPopup" @close-details="closePopup" :task="selectedTask"></PopupTask>
</template>

<style>
  .allTasks {
    width: 100%;
    max-width: 900px;
    margin: 40px auto;
  }
  .task-group {
    margin-bottom: 35px;
  }
  .group-title {
    margin-bottom: 15px;
    padding-bottom: 8px;
    border-bottom: 2px solid #eee;
    font-size: 22px;
  }
  .task-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
</style>