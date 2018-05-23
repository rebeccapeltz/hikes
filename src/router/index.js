/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Product from '@/components/Product'
import AddProduct from '@/components/AddProduct'
import ProductDelete from '@/components/ProductDelete'
import ProductEdit from '@/components/ProductEdit'
import List from '@/components/List'

Vue.use(Router)

export default new Router({routes:[
  { path: '/', component: List},
  { path: '/product/:product_id', component: Product, name: 'product'},
  { path: '/add-product', component: AddProduct},
  { path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit'},
  { path: '/product/:product_id/delete', component: ProductDelete, name: 'product-delete'}
]})
