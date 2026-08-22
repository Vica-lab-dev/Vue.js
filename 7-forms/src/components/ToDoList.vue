<template>
  <h1>Hello World</h1>

  <Form class="task-form" ref="taskForm" @submit="addTask">
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

  <Form class="sort-form">
    <label for="prioritySort">Sort tasks</label>

    <Field
        id="prioritySort"
        class="form-input"
        @change="changeSort"
        name="prioritySort"
        as="select"
        v-model="prioritySort"
    >
      <option value="important">By importance</option>
      <option value="unimportant">By unimportance</option>
    </Field>
  </Form>

  <div class="allTasks">
    <div
        class="task-group"
        v-for="(tasksInGroup, index) in groupedTypes"
        :key="index"
    >
      <h2 class="group-title">{{ index }}</h2>

      <div class="task-list">
        <div
            class="task-card"
            v-for="(task, id) in tasksInGroup"
            :key="id"
        >
          <div class="task-content">
            <h3>{{ task.title }}</h3>

            <p class="task-description">
              {{ task.description }}
            </p>

            <div class="task-meta">
              <span> {{ task.dueDate }}</span>
              <span>⚡ {{ task.priority }}</span>
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
      </div>
    </div>
  </div>
</template>
<style>
.task-form,
.sort-form {
width: 100%;
max-width: 700px;
margin: 0 auto 30px;
padding: 25px;
border: 1px solid #ddd;
border-radius: 12px;
background: #fff;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.task-form h2 {
margin: 0 0 20px;
}

.form-group {
display: flex;
flex-direction: column;
margin-bottom: 16px;
}

.form-row {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;
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
transition: background 0.2s;
}

.save-button:hover {
background: #4338ca;
}

.sort-form {
display: flex;
align-items: center;
gap: 15px;
padding: 15px 20px;
}

.sort-form label {
font-weight: 600;
white-space: nowrap;
}

.sort-form .form-input {
max-width: 220px;
}

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

@media (max-width: 600px) {
.form-row {
grid-template-columns: 1fr;
gap: 0;
}

.sort-form {
flex-direction: column;
align-items: stretch;
}

.sort-form .form-input {
max-width: none;
}

.task-card {
align-items: flex-start;
flex-direction: column;
}

.delete-button {
width: 100%;
}
}
</style>

<script lang="ts">
import {defineComponent} from "vue";
import FormTaskType from "@/Types/FormTaskType";
import {Form, Field, ErrorMessage} from "vee-validate";
import {generateRandomId, getAllTasks, saveTask, updateAllTasks} from "@/models/tasksModel";
import TaskType from "@/Types/TaskType";
import {priorityOrder} from "@/Types/PriorityOrder";
import {isIdUsed} from "@/helpers/idHelper";
import {BoardType} from "@/Types/boards/BoardType";

export default defineComponent({
  name: "ToDoList",
  components: {ErrorMessage, Field, Form},
  data(): FormTaskType {
    return {
      id: "",
      title: "",
      description: "",
      dueDate: "",
      priority: null,
      tasks: [] as TaskType[],
      prioritySort: null,
      board: "todo",
    }
  },

  beforeMount() {
    this.tasks = getAllTasks() ?? [];
  },

  computed: {
    groupedTypes(): Record<BoardType, TaskType[]> {
      const groups: Record<BoardType, TaskType[]> = {
        todo: [],
        doing: [],
        done: [],
      };

      for(const task of this.tasks) {
        groups[task.board].push(task);
      }

      return groups;
    }
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
    changeSort() {

        this.tasks.sort((a, b) => {
          const aPriority = priorityOrder[a.priority ?? "lowpriority"];
          const bPriority = priorityOrder[b.priority ?? "lowpriority"];

          return this.prioritySort === "important"
          ? aPriority - bPriority
              : bPriority - aPriority;
        });

    },

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

      let tempId = generateRandomId();

      if(isIdUsed(tempId, this.tasks)) {
        tempId = generateRandomId();
      }

      const task = {
        id: generateRandomId(),
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority,
        board: this.board,
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