<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const path = route.path
</script>
<template lang='html'>
  <div class="rounded-full w-8 h-8 hover:bg-gray-light duration-300 flex items-center justify-center" :class="path === '/springs' ? 'bg-gray-light' : ''" @click="router.push('/springs')">
    <i class="pi pi-home text-lg" />
  </div>
</template>
<style lang='scss'>
    
</style>