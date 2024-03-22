import en from './langs/en'; // 英文语言配置
import zhCN from './langs/zh'; // 中文语言配置

import { createI18n } from 'vue-i18n';

let lang = localStorage.getItem('local') // 当前使用的语言类型

lang = lang || 'zhCN'

export const i18n = createI18n({
  legacy: false, // componsition API需要设置为false 
  locale: lang,
  globalInjection: true, // 可以在template模板中使用$t
  messages: {
    en,
    zhCN
  }
})