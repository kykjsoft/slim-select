import './assets/scss/index.scss'

import { createApp } from 'vue'
import router from './router'

import Prism from 'prismjs'
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/plugins/toolbar/prism-toolbar'
import App from './app.vue'
import { i18n } from './lang/index'


new Normalizer({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mixin({
  updated() {
    Prism.highlightAll()
  },
})
app.mount('#app')
