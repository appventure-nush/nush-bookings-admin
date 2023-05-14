import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import WelcomeView from './views/WelcomeView.vue';
import TourView from './views/TourView.vue';
import ManageBookings from './views/ManageBookings.vue';
import AddParticipants from './views/AddParticipants.vue';

const routes = [
  {
    path: '/',
    component: WelcomeView,
  },
  {
    path: '/add',
    component: AddParticipants,
  },
  {
    path: '/home',
    component: ManageBookings,
  },
  {
    path: '/open-house-tour',
    component: TourView,
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
        if (to.path !== '/') next('/');
        else next();
      } else {
        // is authenticated
        if (to.path === '/') next('/home');
        else next();
      }
    },
    (error) => {}
  );
});

export default router;
