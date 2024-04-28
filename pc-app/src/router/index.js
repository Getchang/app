import { createWebHistory, createRouter } from 'vue-router';
// 公共路由
export const constantRoutes = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/view/error/404'),
  },
  {
    path: '',
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/view/index'),
        name: 'Index',
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/view/about'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
