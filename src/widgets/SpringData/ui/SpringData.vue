<script setup lang='ts'>
import { Status } from '@features/Status'
import {SpringDataView} from '@features/SpringDataView'
</script>
<template lang='html'>
  <div class="flex flex-col items-center px-7">
    <h2 class="text-lg">Родник номер раз</h2>
    <p class="text-sm">000000000</p>
    <a-image
    :width="300"
    :height="200"
    class="object-cover mt-3"
    src="https://www.zhukgsn.ru/wp-content/uploads/2023/02/rodnik.jpg"
  />
  <Status />
  <SpringDataView />
  </div>
</template>
<style lang='scss'>
    
</style>@//features/SpringDataView