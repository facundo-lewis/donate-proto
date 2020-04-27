import Vue from 'vue'
import VueRouter from 'vue-router'

import DonatorView from "../layouts/DonatorView.vue";
import OrganizationView from "../layouts/OrganizationView.vue";

import DonationRequests from '../views/DonationRequests.vue'
import DonationRequestCreate from '../views/DonationRequestCreate.vue'
import DonationRequestEdit from '../views/DonationRequestEdit.vue'
import Organizations from '../views/Organizations.vue'
import OrganizationCreate from '../views/OrganizationCreate.vue';
import OrganizationEdit from '../views/OrganizationEdit.vue';
import Users from '../views/Users.vue'
import User from '../views/User.vue'

import Home from '../views/Home.vue'
import Donation from '../views/Donation.vue'
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
          component: DonationRequestEdit
        },
        {
          path: 'donation',
          name: 'DonationRequestCreate',
          component: DonationRequestCreate
        },
        {
          path: '',
          alias: '',
          component: DonationRequests
        }
      ]
    },
    {
      path: '/',
      component: DonatorView,
      children: [
        {
          path: 'MyDonations',
          name: 'MyDonations',
          component: Home
        },
        {
          path: 'donate/:id',
          name: 'Donation',
          component: Donation
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
