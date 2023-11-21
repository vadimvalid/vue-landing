<script setup>
const props = defineProps({
  logoTitle: String,
  logoSubTitle: String
})
</script>

<template>
  <router-link to="/" class="text-lg"
    >{{ props.logoTitle
    }}<span class="text-orange font-black"> {{ props.logoSubTitle }}</span></router-link
  >
</template>
