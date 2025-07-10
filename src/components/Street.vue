<script setup>
let props = defineProps({
  street: Object
})
</script>

<template>
  <router-link class="street" :to="{ name: 'mfc', params: { id: props.street.id } }">{{ props.street.street_name }}</router-link>
</template>

<style scoped>
  .street {
    display: block;
    margin: 10px 0;
    padding-left: 10px;
    cursor: pointer;
  }
</style>
