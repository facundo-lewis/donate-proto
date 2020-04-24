import Vue from 'vue'
import VueRouter from 'vue-router'
import DonatorView from "../layouts/DonatorView.vue";
import OrganizationView from "../layouts/OrganizationView.vue";
import Donations from '../views/Donations.vue'
import Organizations from '../views/Organizations.vue'
import Users from '../views/Users.vue'
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
          path: 'organizations',
          name: 'Organizations',
          component: Organizations
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
          path: 'donation/:id',
          name: 'Donation',
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
