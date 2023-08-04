import { Plugin } from "vite";
import useI18n from './usei18n'

const VitePluginMiniI18n = (): Plugin => {
  return {
    name: 'vite-plugin-mini-i18n',
    transform(code, id) {
      if (!/vue&type=i18n/.test(id)) {
        return
      }
      return `export default Comp => {
        Comp.i18n = ${code}
      }`
    }
  }
}

export {
  VitePluginMiniI18n,
  useI18n,
}

export default VitePluginMiniI18n