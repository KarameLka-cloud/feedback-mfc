<script setup>
import Department from "./Department.vue"

let props = defineProps({
  departments_list: Object
})
</script>

<template>
  <div class="first_later">
    {{ props.departments_list.first_later }}
  </div>
  <Department v-for="location in props.departments_list.locations" :location="location"/>
</template>

<style scoped>
.first_later {
  font-weight: bold;
  color: #FF4D35;
}
</style>
