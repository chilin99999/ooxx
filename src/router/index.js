import Vue from 'vue'
import Router from 'vue-router'
import ooxx from '@/components/ooxx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ooxx',
      component: ooxx
    }
  ]
})
