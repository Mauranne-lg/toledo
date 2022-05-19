import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import createRouter from './pages/routes.js'
import App from './App.vue'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const store = createPinia()
const router = createRouter(createWebHistory())
const app = createApp(App)


/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */


const i18n = createI18n({
  locale: 'es',
  globalInjection: true,
  legacy: false,
  messages,
})

export default i18n;
app.use(router).use(store).use(i18n).mount('#app')

router.resolve({
    name: 'not-found',
    params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'