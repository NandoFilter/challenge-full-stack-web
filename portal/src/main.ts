import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMagnifyingGlass,
  faGraduationCap,
  faPen,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faGraduationCap, faPen, faTrash)

Vue.use(Vuetify)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default new Vuetify({
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
})

const vuetify: Vuetify = new Vuetify()

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
