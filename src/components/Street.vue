<script setup>
import ModalWindow from "./ModalWindow.vue"
import {ref} from "vue"

let props = defineProps({
  street: Object
})

let modalVisible = ref(false)

function toggleModal() {
  modalVisible.value = !modalVisible.value
}
</script>

<template>
  <ModalWindow v-if="modalVisible" :toggleModal="toggleModal" :id="props.street.id"/>
  <a class="street" @click="toggleModal">
    {{ props.street.street_name }}
  </a>
</template>

<style scoped>
.street {
  display: block;
  margin: 10px 0;
  padding-left: 10px;
  cursor: pointer;
}
</style>
