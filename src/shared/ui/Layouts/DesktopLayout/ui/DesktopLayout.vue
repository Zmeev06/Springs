<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
</script>
<template lang='html'>
  <a-layout>
      <a-layout-content>
        <slot name="content" />
      </a-layout-content>
    </a-layout>
    <a-float-button-group trigger="hover" type="primary" :style="{ right: '24px' }">
      <template #icon>
        <i class="pi pi-map-marker" v-if="route.path === '/map'"/>
        <i class="pi pi-home" v-if="route.path.startsWith('/spring')"/>
        <i class="pi pi-calendar-times" v-if="route.path === '/events'"/>
      </template>
      <a-float-button v-if="route.path !== '/map'" @click="router.push('/map')">
        <template #icon>
          <i class="pi pi-map-marker" />
        </template>
      </a-float-button>
      <a-float-button v-if="!route.path.startsWith('/spring')" @click="router.push('/springs')">
        <template #icon>
          <i class="pi pi-home" />
        </template>
      </a-float-button>
      <a-float-button>
        <template #icon>
          <i class="pi pi-calendar-times" />
        </template>
      </a-float-button>
    </a-float-button-group>
</template>
<style lang='scss'>
    
</style>