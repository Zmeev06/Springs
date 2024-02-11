<script setup lang='ts'>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
<template lang='html'>
  <a-layout>
    <a-layout-sider width="25vw" v-if="route.path === '/map'">
      <slot name="sidebar" />
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <slot name="content" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang='scss'>
    
</style>