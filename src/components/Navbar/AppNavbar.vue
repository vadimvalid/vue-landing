<script setup>
import { ref } from 'vue'
import AppNavbarLink from '@/components/Navbar/AppNavbarLink.vue'

const links = ref([
  { id: '0', path: '/company', title: 'Company' },
  { id: '1', path: '/services', title: 'Services' },
  { id: '2', path: '/solutions', title: 'Solutions' },
  { id: '3', path: '/industries', title: 'Industries' },
  { id: '4', path: '/insights', title: 'Insights' },
  { id: '5', path: '/news-and-media', title: 'News And Media' }
])
</script>

<template>
  <nav>
    <ul class="flex gap-xl">
      <AppNavbarLink v-for="link in links" :key="link.id" :path="link.path" :title="link.title" />
    </ul>
  </nav>
</template>
