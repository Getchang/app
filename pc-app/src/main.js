import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// svg图标
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/SvgIcon';

const app = createApp(App);

app.use(router);

app.component('svg-icon', SvgIcon);

app.mount('#app');
