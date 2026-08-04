import { createApp } from 'vue'
import App from './App.vue'

import { defineRule } from "vee-validate";
import { required, min, max } from "@vee-validate/rules"

defineRule("required", required)
defineRule("min", min)
defineRule("max", max)

createApp(App).mount('#app')
