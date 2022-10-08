import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMagnifyingGlass,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faGraduationCap)

Vue.use(Vuetify)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1c1c1c'
      }
    }
  }
}

const vuetify: Vuetify = new Vuetify(opts)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
