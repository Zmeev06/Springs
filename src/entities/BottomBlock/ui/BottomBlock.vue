<script setup lang='ts'>
  
</script>
<template lang='html'>
  <Teleport to="body">
  <div class=" fixed bottom-0 left-0 w-full h-16 rounded-t-xl bg-cyan flex items-center justify-center">
    
    <div class="flex w-4/5 justify-between items-center">
      <slot name="map" />
      <slot name="springs" />
      <slot name="home" />
      <slot name="events" />
      
    </div>
  </div>
</Teleport>
</template>
<style lang='scss'>
    
</style>