<template>
  <div class="block unload__info">
    <p class="unload__title text-bold">{{info.title}}</p>
    <p class="unload__subtitle text-bold">{{info.subtitle}}</p>
    <p class="unload__text" v-html="info.text"></p>
  </div>
</template>

<script setup>
  const info={
    title:'Выгрузка',
    subtitle:'Выполняет выгрузку',
    text:`
      -Собирает фотографии из заказов пользователей.
      <br>
      -Выгружает по папкам.
    `
  }
</script>