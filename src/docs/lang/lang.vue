<template>
  <div style="display: inline-block;">
    <select @change="handleChange" :value="locale">
      <option value="en">English</option>
      <option value="zhCN">中文</option>
    </select>
  </div>
</template>


<script setup lang="ts">

import { useI18n } from 'vue-i18n';
const { locale } = useI18n()



const handleChange = (e: Event) => {
  const select: HTMLSelectElement = e.target! as HTMLSelectElement;
  changeLang(select.value)
}

const changeLang = (val: string) => {
  locale.value = val
  localStorage.setItem('local', val)
  location.reload()
}

</script>