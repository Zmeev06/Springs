<script setup lang='ts'>
import {SpringsData} from '@widgets/SpringsData';
import { BottomPanel } from '@widgets/BottomPanel';
import { SpringsList } from '@entities/SpringsList'
</script>
<template lang='html'>
  <div class="pt-3 bg-gray-light h-screen">
    <SpringsData />
    <SpringsList />
    <BottomPanel />
  </div>
</template>
<style lang='scss'>
    
</style>