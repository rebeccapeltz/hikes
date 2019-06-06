/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Hike from '@/views/Hike'
import AddHike from '@/views/AddHike'
import HikeDelete from '@/views/HikeDelete'
import HikeEdit from '@/views/HikeEdit'
import List from '@/views/List'

Vue.use(Router)

export default new Router({routes:[
  { path: '/', component: List, name: 'list'},
  { path: '/hike/:hike_id', component: Hike, name: 'hike'},
  { path: '/add-hike', component: AddHike},
  { path: '/hike/:hike_id/edit', component: HikeEdit, name: 'hike-edit'},
  { path: '/hike/:hike_id/delete', component: HikeDelete, name: 'hike-delete'}
]})
