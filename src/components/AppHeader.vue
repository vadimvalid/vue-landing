<script setup>
import AppLogo from '@/components/AppLogo.vue'
import AppNavbar from '@/components/Navbar/AppNavbar.vue'
import AppLink from '@/components/AppLink.vue'
import { reactive } from 'vue'

const logo = { logoTitle: 'Ship', logoSubTitle: 'Up' }
const links = reactive([
  {
    id: '1',
    link: '/',
    title: 'Reguest Quote',
    isSecondary: false
  },
  {
    id: '2',
    link: '/',
    title: 'Join Now',
    isSecondary: true
  }
])
</script>

<template>
  <header class="flex justify-between items-center gap-base pt-3xl">
    <AppLogo :logo-title="logo.logoTitle" :logo-sub-title="logo.logoSubTitle" />
    <AppNavbar />
    <div class="flex gap-xl">
      <AppLink
        v-for="link in links"
        :key="link.id"
        :link="link.link"
        :title="link.title"
        :is-secondary="link.isSecondary"
      />
    </div>
  </header>
</template>
