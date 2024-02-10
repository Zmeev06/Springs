<script setup lang='ts'>
import { BottomBlock } from '@entities/BottomBlock';
import {Map, Springs, Events} from '@features/BottomNav'
  
</script>
<template lang='html'>
  <BottomBlock>
    <template #map>
      <Map />
    </template>
    <template #home >
      <Springs />
    </template>
    <template #events>
      <Events />
    </template>
  </BottomBlock>
</template>
<style lang='scss'>
    
</style>