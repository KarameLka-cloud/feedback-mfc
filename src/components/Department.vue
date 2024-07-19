<script setup>
import ListLocation from "./ListLocation.vue"
import {ref} from "vue"

let props = defineProps({
  location: Object
})

let isVisible = ref(false)

function toggleList() {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div class="department" @click="toggleList">
    <img class="dotted" src="../assets/dotted.svg" alt="">
    {{ props.location.location_name }}
  </div>
  <ListLocation :streets="props.location.streets" v-if="isVisible"/>
</template>

<style scoped>
.department {
  cursor: pointer;
  border-bottom: 1px dotted #623B2A;
}

.dotted {
  height: 14px;
}
</style>
