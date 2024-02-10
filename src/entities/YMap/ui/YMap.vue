<script setup lang='ts'>
import type { YMap } from '@yandex/ymaps3-types';
import { shallowRef } from 'vue';
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapZoomControl, YandexMapControls } from 'vue-yandex-maps';
import { settings } from '../model';
import { Marker } from '@//features/Marker';


const map = shallowRef<null | YMap>(null);
</script>
<template lang='html'>
  <yandex-map
  v-model="map"
  :settings="settings"
  width="100vw"
  height="100vh"
  cursorGrab
>
<Marker :coords="[39.720353, 47.222080]"/>
<yandex-map-default-scheme-layer/>
<yandex-map-default-features-layer />
<yandex-map-controls :settings="{ position: 'right' }">
  <yandex-map-zoom-control />
</yandex-map-controls>
</yandex-map>
</template>
<style lang='scss'>
    
</style>