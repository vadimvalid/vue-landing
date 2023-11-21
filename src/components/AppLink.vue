<script setup>
const props = defineProps({
  link: String,
  title: String,
  isSecondary: Boolean
})
</script>

<template>
  <router-link
    :to="props.link"
    class="flex px-3xl py-lg border border-b-secondary rounded-2xl text-md font-bold"
    :class="{ 'bg-secondary text-white': props.isSecondary }"
    >{{ props.title }}</router-link
  >
</template>
