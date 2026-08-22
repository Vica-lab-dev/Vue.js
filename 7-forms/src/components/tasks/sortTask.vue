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
