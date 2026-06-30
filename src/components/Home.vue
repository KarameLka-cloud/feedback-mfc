<script setup>
import DepartmentsBlock from "./DepartmentsBlock.vue";
import { useDepartmentsStore } from "../stores/departments.js";

const departments = useDepartmentsStore().departments;
</script>

<template>
  <DepartmentsBlock
    v-for="departments_list in departments"
    :departments_list="departments_list"
  />
</template>
