<script setup>
let props = defineProps({
  streets: Array
})
</script>

<template>
  <div class="street" v-for="street in props.streets">
    {{ street.street_name }}
  </div>
</template>

<style scoped>
.street {
  cursor: pointer;
  margin: 10px 0;
  padding-left: 10px;
}
</style>
