<script setup>
import Street from "./Street.vue";

let props = defineProps({
  streets: Array
})
</script>

<template>
  <Street v-for="street in props.streets" :street="street"/>
</template>

<style scoped>
</style>
