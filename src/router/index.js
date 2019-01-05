import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/investment-consumption'
    },
    {
      path: '/investment-consumption',
      component:Index,
      children: [
        {
          path: '',
          name: 'dafault-investment-consumption',
          component:() => import('../pages/investment/gdp.vue')
        },
        {
          path: 'gdp',
          name: 'gdp',
          component:() => import('../pages/investment/gdp.vue')
        },
        {
          path: 'financial',
          name: 'financial',
          component:() => import('../pages/investment/financial.vue')
        },
        {
          path: 'fix_investment',
          name: 'fix_investment',
          component:() => import('../pages/investment/fixinvestment.vue')
        },
        {
          path: 'energy',
          name: 'energy',
          component:() => import('../pages/investment/energy.vue')
        }
      ]
    }
  ]
})
