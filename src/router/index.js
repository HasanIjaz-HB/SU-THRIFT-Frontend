import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LogInPage from '@/components/LoginPage'
import Cart from '@/components/Cart'
import SignUpPage from '@/components/SignUpPage'
import Profile from '@/components/user/Profile'
import AdminProfile from '@/components/AdminProfile'
import ForgotPassword from '@/components/ForgotPassword'
import Product from '@/components/ProductPage'
import OrderConfirmation from '@/components/OrderConfirmation'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login-page',
      name: 'LogInPage',
      component: LogInPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/signup-page',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/user/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '*',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/forgot-pass',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/confirmation',
      name: 'OrderConfirmation',
      component: OrderConfirmation
    },
    {
      path: '/admin',
      name: 'AdminProfile',
      component: AdminProfile
    }
  ]
})
