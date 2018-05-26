/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hike from '@/components/Hike'
import AddHike from '@/components/AddHike'
import HikeDelete from '@/components/HikeDelete'
import HikeEdit from '@/components/HikeEdit'
import List from '@/components/List'

Vue.use(Router)

export default new Router({routes:[
  { path: '/', component: List, name: 'list'},
  { path: '/hike/:hike_id', component: Hike, name: 'hike'},
  { path: '/add-hike', component: AddHike},
  { path: '/hike/:hike_id/edit', component: HikeEdit, name: 'hike-edit'},
  { path: '/hike/:hike_id/delete', component: HikeDelete, name: 'hike-delete'}
]})
