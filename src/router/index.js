import Vue from 'vue'
import VueRouter from 'vue-router'

import DonatorView from "../layouts/DonatorView.vue";
import OrganizationView from "../layouts/OrganizationView.vue";

import Donations from '../views/Donations.vue'
import DonationCreate from '../views/DonationCreate.vue'
import DonationEdit from '../views/DonationEdit.vue'
import Organizations from '../views/Organizations.vue'
import OrganizationCreate from '../views/OrganizationCreate.vue';
import OrganizationEdit from '../views/OrganizationEdit.vue';
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/admin',
      component: OrganizationView,
      children: [        
        {
          path: 'users',
          name: 'Users',
          component: Users
        },          
        {
          path: 'user/:id',
          name: 'UserView',
          component: User
        },
        {
          path: 'organizations',
          name: 'Organizations',
          component: Organizations
        },
        {
          path: 'organization/:id',
          name: 'Organizations',
          component: OrganizationEdit
        },
        {
          path: 'organization',
          name: 'Organizations',
          component: OrganizationCreate
        },
        {
          path: 'donation/:id',
          name: 'DonationEdit',
          component: DonationEdit
        },
        {
          path: 'donation',
          name: 'DonationCreate',
          component: DonationCreate
        },
        {
          path: '',
          alias: '',
          component: Donations
        }
      ]
    },
    {
      path: '/',
      component: DonatorView,
      children: [
        {
          path: 'donations',
          name: 'Donations',
          component: Home
        },
        {
          path: 'donations/requests',
          name: 'DonationRequests',
          component: Home
        },
        {
          path: '',
          alias: '',
          name: 'Home',
          component: Home
        }        
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
