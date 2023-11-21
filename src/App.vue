<script setup>
import AppInput from './components/AppInput.vue'
import { ref } from 'vue'

const searchText = ref('')
</script>

<template>
  <AppInput v-model="searchText" />
</template>
