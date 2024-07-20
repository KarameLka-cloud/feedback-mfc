<script setup>
import ModalWindow from "./ModalWindow.vue"
import {ref} from "vue"

let props = defineProps({
  streets: Array
})

// let modalVisible = ref(false)
//
// function toggleModal() {
//   modalVisible.value = !modalVisible.value
// }
</script>

<template>
  <a class="street" v-for="street in props.streets">
    <!--    <ModalWindow v-if="modalVisible"/>-->
    {{ street.street_name }}
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
