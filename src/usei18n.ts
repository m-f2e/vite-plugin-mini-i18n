import { getCurrentInstance, ref } from 'vue'
import type { ConcreteComponent } from './typings'

export default function useI18n() {
  const locale = ref('en')
  // 获取组件实例
  const ins = getCurrentInstance()
  // 从组件实例获取i18n
  const i18n = (ins?.type as ConcreteComponent).i18n
  const t = (key: string) => {
    if (!i18n || !i18n[locale.value]) {
      console.warn(`i18n config not found by ${key}!`)
      return key
    }
    return i18n[locale.value][key]
  }
  return { locale, t } 
}