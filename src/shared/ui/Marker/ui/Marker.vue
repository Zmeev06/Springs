<script setup lang='ts'>
import springIcon from '@assets/icons/spring.svg'
import {
  YandexMapMarker,
} from 'vue-yandex-maps';
interface Props {
  coords: any,
  openMarker: number
  id: number
}

const props = defineProps<Props>()

</script>
<template lang='html'>
  <yandex-map-marker :settings="{ coordinates: props.coords }">
    <div class="rounded-full w-12 h-12 bg-white border-4 border-[#ff4f4f]">
      <img :src="springIcon" />
    </div>
  </yandex-map-marker>
</template>

<style lang='scss'>
    
</style>