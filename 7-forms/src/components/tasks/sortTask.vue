<script setup lang="ts">
import {Field, Form} from "vee-validate";
import{ ref, watch, defineEmits } from "vue";

const emit = defineEmits<{
  (e: "update:prioritySort", value: string): void;
  (e: "changeSort"): void;
}>();

const prioritySort = ref<"important" | "unimportant">("important");

watch(prioritySort, (value) => {
  emit("update:prioritySort", value);
  emit("changeSort");
})
</script>
<template>
  <Form class="sort-form">
    <label for="prioritySort">Sort tasks</label>

    <Field
        id="prioritySort"
        class="form-input"
        name="prioritySort"
        as="select"
        v-model="prioritySort"
    >
      <option value="important">By importance</option>
      <option value="unimportant">By unimportance</option>
    </Field>
  </Form>
</template>

<style>
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
</style>