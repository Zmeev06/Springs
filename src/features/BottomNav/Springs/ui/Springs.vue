<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const path = route.path
</script>
<template lang='html'>

  <div class="w-20 h-20 bg-cyan rounded-full flex items-center justify-center hover:bg-cyan-light shadow-lg shadow-cyan" :class="path === '/springs' ? 'bg-cyan-light' : ''" @click="router.push('/springs')">
    <i class="pi pi-home text-lg text-white" />
  </div>
</template>
<style lang='scss'>
    
</style>