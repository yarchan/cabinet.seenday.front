<template>
  <div class="unload__choose">
    <div class="unload__choose-wrapper" :class="scrolled?'position-fixed':''">
      <div v-if="!unload.data && !getunloadprocess" class="notice unload__nochoose" data-color="purple">
        Для того, чтобы посмотреть всю информацию о выгрузке, а также ее скачать, нажмите на требуемую выгрузку в столбце слева
      </div>
      <div v-if="unload.data" class="unload__content">
        <div class="unload__content-title">
          <div class="unload__content-title-item">
            <div class="unload__id">{{ unload.data.id }}</div>          
            <div class="unload__event">{{ unload.data.event }}</div>            
          </div>
          <div v-if="screenwidth>768" class="">
            <button @click="$emit('resetchoose',{})" class="unload__btn-close">х</button>            
          </div>
        </div>
        <div class="block unload__description">
          <div class="block notice unload__description-subtitle" data-color="gray">
            <p>Если после клика на ссылку загрузка не пошла, проверьте не блокирует ли браузер скачивание архива</p>
          </div>
          <div class="">
            <div class="text-bold unload__description-title">
              Ссылка для скачивания архива Выгрузки (.zip):
            </div>
            <div class="">
              <a class="link" href="">{{ unload.data.download_link }}</a>    
              <button class="unload__btn span-link">cкопировать ссылку</button>                   
            </div>
          </div>  
          <div v-if="screenwidth<768" class="unload__btn-close-wrapper">
            <button @click="$emit('resetchoose',{})" class="unload__btn-close">Закрыть</button>       
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  unload: {
    type: Object,
    required: true
  },

  screenwidth: {
    type: Number,
    required: true
  },
  getunloadprocess: {
    type: Boolean,
    required: true
  },
  scrolled: {
    type: Boolean,
    required: true
  },
});
</script>