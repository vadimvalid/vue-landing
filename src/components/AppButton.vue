<script setup>
const props = defineProps(['type', 'title'])
</script>

<template>
  <button :type="props.type">{{ props.title }}</button>
</template>
