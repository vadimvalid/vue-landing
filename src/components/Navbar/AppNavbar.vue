<script setup>
import { ref } from 'vue'
import AppNavbarLink from '@/components/Navbar/AppNavbarLink.vue'

const links = ref([
  { id: '0', path: '/company', title: 'Company', isDropdown: true },
  { id: '1', path: '/services', title: 'Services', isDropdown: true },
  { id: '2', path: '/solutions', title: 'Solutions', isDropdown: false },
  { id: '3', path: '/industries', title: 'Industries', isDropdown: false },
  { id: '4', path: '/insights', title: 'Insights', isDropdown: false },
  { id: '5', path: '/news-and-media', title: 'News And Media', isDropdown: false }
])
</script>

<template>
  <nav>
    <ul class="flex gap-xl">
      <AppNavbarLink v-for="link in links" :key="link.id" v-bind="link" />
    </ul>
  </nav>
</template>
