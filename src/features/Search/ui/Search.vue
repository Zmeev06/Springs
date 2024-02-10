<script setup lang='ts'>
import { ref } from 'vue';

const searchValue = ref('')
</script>
<template lang='html'>
  <div class="relative w-4/5 mx-auto">
    <a-input v-model:value="searchValue" placeholder="Поиск" />
    <i class="pi pi-search text-gray absolute duration-300 top-1/4 right-2" />
  </div>
</template>
<style lang='scss'>
    
</style>