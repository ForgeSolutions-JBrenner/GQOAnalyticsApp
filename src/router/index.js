import Vue from 'vue'
import VueRouter from 'vue-router'
import DPMImport from '../components/DPMImport.vue'
import Upload from '../components/Upload.vue'
import Home from '../components/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta: {
		title: 'Home'
	}
  },
  {
    path: '/DPMImport',
    name: 'DPMImport',
    component: DPMImport,
	meta: {
		title: 'DPM Import'
	}
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: Upload,
	meta: {
		title: 'Upload'
	}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guard to check for logged in users
//router.beforeEach((to, from, next) => {
//  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

//  if (requiresAuth && !auth.currentUser) {
//    next('/login')
//  } else {
//    next()
//  }
//})

export default router