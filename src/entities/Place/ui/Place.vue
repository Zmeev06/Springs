<script setup lang='ts'>
import type { YMap } from '@yandex/ymaps3-types';
import { shallowRef } from 'vue';
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer } from 'vue-yandex-maps';
import { Marker } from '@shared/ui/Marker';

interface Props {
  coords?: string
  addres?: string
  mapCoords?: any
}

const props = defineProps<Props>()

const map = shallowRef<null | YMap>(null);
</script>
<template lang='html'>
  <div v-if="props.coords && props.addres && props.mapCoords">
    <a-descriptions title="" :column="1" class="flex flex-col justify-between">
      <a-descriptions-item label="Координаты">
        <p>{{props.coords ? props.coords : 'Нет данных'}}</p>
      </a-descriptions-item>
      <a-descriptions-item label="Адрес">
        <p>{{props.addres ? props.addres : 'Нет данных'}}</p>
      </a-descriptions-item>
      </a-descriptions>
      <div class="w-[95%] h-52 tablet:h-80 mx-auto"><yandex-map
        v-model="map"
        :settings="{
          location: {
            center: props.mapCoords,
            zoom: 15,
          },
        }"
        width="100%"
        height="100%"
        cursorGrab
      >
      <Marker :coords="props.mapCoords"/>
      <yandex-map-default-scheme-layer/>
      <yandex-map-default-features-layer />
      </yandex-map>
      
      </div>
    </div>
</template>
<style lang='scss'>
    
</style>