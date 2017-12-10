import Vue from 'vue'
import Router from 'vue-router'
import Pos from '../containers/Pos.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Pos
    }
  ]
})
