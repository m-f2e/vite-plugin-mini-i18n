# vite-plugin-mini-i18n
组件i18n国际化插件，组件分离定义国际化

## 安装
```shell
npm i @m-f2e/vite-plugin-mini-i18n
```

## 使用
修改`vite.config.ts`
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginMiniI18n } from '@m-f2e/vite-plugin-mini-i18n'

export default defineConfig({
  plugins: [
    vue(), 
    VitePluginMiniI18n(),
  ],
})
```

App.vue
```vue
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
import { useI18n } from '@m-f2e/vite-plugin-mini-i18n'

const { locale, t } = useI18n()

</script>
```