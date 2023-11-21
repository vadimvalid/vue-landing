<script setup>
const props = defineProps({
  path: String,
  title: String,
  isDropdown: Boolean
})
</script>

<template>
  <li>
    <router-link :to="props.path" class="font-medium text-sm py-xs">{{ props.title }}</router-link>
    <span v-if="props.isDropdown" class="icon-down-open w-lg ml-xs"></span>
  </li>
</template>
