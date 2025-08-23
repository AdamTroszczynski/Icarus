import { createRouter, createWebHistory } from 'vue-router';
import QuestsView from '@/views/quests/QuestsView.vue';
import TrainingView from '@/views/trainings/TrainingView.vue';
import ShelterView from '@/views/shelter/ShelterView.vue';
import FightsView from '@/views/fights/FightsView.vue';
import LoginView from '@/views/login/LoginView.vue';
import { useAuth } from '@/composable/useAuth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LoginView, name: 'login' },
    { path: '/quests', component: QuestsView, name: 'quests' },
    { path: '/trainings', component: TrainingView, name: 'trainings' },
    { path: '/shelter', component: ShelterView, name: 'shelter' },
    { path: '/fights', component: FightsView, name: 'fights' },
  ],
});

router.beforeEach(async (to, from) => {
  const { autoLogin } = useAuth();
  const isAuthenticated = await autoLogin();
  if (to.name !== 'login' && !isAuthenticated) return { name: 'login' };
  if (to.name === 'login' && isAuthenticated) return { name: 'quests' };
});

export default router;
