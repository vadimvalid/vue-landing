<script setup>
import { ref } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import AppNavbar from '@/components/Navbar/AppNavbar.vue'

const logo = ref({ logoTitle: 'Ship', logoSubTitle: 'Up' })
</script>

<template>
  <header class="flex justify-between items-center">
    <AppLogo :logo-title="logo.logoTitle" :logo-sub-title="logo.logoSubTitle" />
    <AppNavbar />
  </header>
</template>
