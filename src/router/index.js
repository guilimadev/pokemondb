import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import PokeInfo from '../views/PokeInfo'
import TypeInfo from '../views/TypeInfo'
import TypeSearch from '../views/TypeSearch'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
 {
   path: '/pokemon/:id',  
   name: 'PokeInfo',
   component: PokeInfo
 },
 {
   path: '/type/:id',
   name: 'TypeInfo',
   component: TypeInfo
  },
  {
    path: '/typesearch',
   name: 'TypeSearch',
   component: TypeSearch
  }
]

const router = new VueRouter({
  routes
})

export default router
