import Vue from 'vue'
import Router from 'vue-router'
import TypeMain from '@/components/TypeMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TypeMain',
      component: TypeMain
    }
  ]
})
