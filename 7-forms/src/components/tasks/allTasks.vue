<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import {BoardType} from "@/Types/boards/BoardType";
import TaskType from "@/Types/TaskType";
import SingleTask from "@/components/tasks/singleTask.vue";

const props = defineProps<{
  groupedTasks: Record<BoardType, TaskType[]>
}>();

const emit = defineEmits<{(e: "delete-task", id: string): void; }>();

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
        ></SingleTask>
      </div>
    </div>
  </div>
</template>