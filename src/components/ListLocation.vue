<script setup>
import ModalWindow from "./ModalWindow.vue"
import {ref} from "vue"

let props = defineProps({
  streets: Array
})

let modalVisible = ref(false)

function toggleModal() {
  modalVisible.value = !modalVisible.value
}
</script>

<template>
  <div class="street" v-for="street in props.streets" @click="toggleModal" @toggleModal="toggleModal">
    <ModalWindow v-if="modalVisible"/>
    {{ street.street_name }}
  </div>
</template>

<style scoped>
.street {
  margin: 10px 0;
  padding-left: 10px;
  cursor: pointer;
}
</style>
