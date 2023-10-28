<template>
  <div class="unload__all">
    <UnloadInfo v-if="screenwidth>768"/>
    <ul  class="unload__list" >
      <li 
        v-for="(unload,index) in allunload" 
        :key="index" 
        class="notice block unload__list-link" 
        :class="(unload.status==='green') ? 'unload__border-green':'unload__border-red'"
        data-color="white" 
        @click="$emit('chooseunload',unload)"
      >
        <div class="" v-html="unload.task_date"></div>  
        <div class="">ID выгрузки: <span class="text-bold">{{unload.id}}</span></div>  
        <div class="">Статус задачи: <span class="text-bold">{{unload.status_text}}</span></div>  
        <div class="">{{unload.event}}</div>  
        <div class="">Размер выгрузки: <span class="text-bold">{{unload.size}}</span></div>  
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  allunload: {
    type: Array,
    required: true
  },
  screenwidth: {
    type: Number,
    required: true
  },
  scrolled: {
    type: Boolean,
    required: true
  },
});
</script>