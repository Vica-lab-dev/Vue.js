import { createApp } from 'vue'
import App from './App.vue'

import { defineRule } from "vee-validate";
import { required, min, max } from "@vee-validate/rules"

defineRule("required", required)
defineRule("min", min);
defineRule("max", max);

defineRule("startsWithCapital", (value: string) => {
   if(value.length === 0) {
       return "Input must not be an empty string!";
   }

   if(value[0] !== value[0].toUpperCase()) {
       return "String must start with a capital letter!"
   }

    return true;
});

defineRule("minWords", (value: string, [minWords]: [number]) => {
     const wordCount = value.trim().split(" ").length;

     if(wordCount < minWords) {
         return `Input must contain at least ${minWords} words!`
     }

     return true;
});

createApp(App).mount('#app')
