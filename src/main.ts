import { createApp } from 'vue';
import './assets/styles/index.less';
import App from './App';
import i18next from './i18next';
import 'virtual:svg-icons-register';

const app = createApp(App);
i18next(app);
app.mount('#app');
