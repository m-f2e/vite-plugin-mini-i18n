
<template>
  <div>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
    <p>{{ t('hello') }}</p>
  </div>
</template>

<i18n>
  {
    en: {
      language: 'Language',
      hello: 'hello'
    },
    zh: {
      language: '语言',
      hello: '你好'
    }
  }
</i18n>

<script setup lang="ts">
import { useI18n } from '../../src/index'

const { locale, t } = useI18n()

</script>