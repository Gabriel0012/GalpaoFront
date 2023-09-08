import { createRouter, createWebHistory, type RouteLocationNormalized, type Router } from 'vue-router'

// Routes created
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home' 
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// Functions

async function canUserAccess(route: RouteLocationNormalized) {
  const user = sessionStorage.getItem('user');
  return !!user || route.name == 'login';
}

router.beforeEach(async (to, from) => {
  const canAccess = await canUserAccess(to)
  if (!canAccess) return '/login'
})

export default router
