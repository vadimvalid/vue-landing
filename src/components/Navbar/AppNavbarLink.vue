<script setup>
const props = defineProps({
  path: String,
  title: String
})
</script>

<template>
  <li>
    <router-link :to="props.path" class="font-medium text-sm py-xs">{{ props.title }}</router-link>
  </li>
</template>
