import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import Welcome from '@/views/Welcome.vue';
import ManageBookings from '@/views/ManageBookings.vue';

const routes = [
  {
    path: '/',
    component: Welcome,
  },
  {
    path: '/manage-bookings',
    component: ManageBookings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  getAuth().onAuthStateChanged(
    (user) => {
      if (user == null) {
        if (to.path === '/manage-bookings') next('/');
        else next();
      } else {
        // is authenticated
        if (to.path !== '/manage-bookings') next('/manage-bookings');
        else next();
      }
    },
    (error) => {}
  );
});

export default router;
