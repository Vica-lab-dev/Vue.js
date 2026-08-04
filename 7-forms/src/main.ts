import { createApp } from 'vue'
import App from './App.vue'

import { defineRule } from "vee-validate";
import { required, min } from "@vee-validate/rules"

defineRule("required", required)
defineRule("min", min)

createApp(App).mount('#app')
