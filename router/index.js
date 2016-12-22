import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../pages/index.vue'
import Exam from '../pages/exam.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'home', path: '/', component: Index},
    { name: 'index', path: '/index', component: Index},
    { name: 'exam', path: '/exam', component: Exam},
  ]
})
