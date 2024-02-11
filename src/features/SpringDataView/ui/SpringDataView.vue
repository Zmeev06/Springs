<script setup lang='ts'>
import { segments } from '../model';
import { ref } from 'vue';
import { Place } from '@entities/Place'
import { Description } from '@entities/Description'
import {Characteristics} from '@entities/Characteristics'

const currentSegment = ref('Расположение')
</script>
<template lang='html'>
  <div class="bg-white rounded-md shadow-md p-3 mt-3">
    <a-segmented v-model:value="currentSegment" :options="segments" />
    <Place v-if="currentSegment === 'Расположение'" addres="Ростовская обл Ростов-на-Дону Батайск ул Колхозная 35" coords="39.22333 12.2322" :map-coords="[39.720353, 47.222080]" class=" mt-2" />
    <Description v-else-if="currentSegment === 'Описание'" text="sdjcnsi isdjcnsjdcn sjdcnsjdnc dsjcnskdcjn sdcjnsdcjn sdjcnsldnclsknclksn sdklnclsdcn dklscnl knslcnsdlckn sldkcnslkdcn slnck scd " class="mt-2"/>
    <Characteristics />
  </div>
</template>
<style lang='scss'>
    
</style>