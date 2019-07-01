import Vue from 'vue'

// Pages
import DefaultPage from '~/components/generals/DefaultPage.vue'

// Organisms
import Teaser from '~/components/elements/organisms/Teaser.vue'
import Grid from '~/components/elements/organisms/Grid.vue'
import Feature from '~/components/elements/organisms/Feature.vue'

Vue.component('page', DefaultPage)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
