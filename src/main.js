// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Pinia
import { createPinia } from 'pinia'

// Vue
import { createApp } from 'vue'
import App from './App.vue'

library.add(fas)
library.add(faInstagram)

const pinia = createPinia()

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(pinia).use(vuetify).mount('#app')
