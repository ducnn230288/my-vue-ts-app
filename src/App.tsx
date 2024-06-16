import { useTranslation } from 'i18next-vue';
import { defineComponent } from 'vue';
import SvgIcon from './library/SvgIcon';

export default defineComponent({
  name: 'App',

  setup() {
    const { t } = useTranslation('locale', { keyPrefix: 'pages.base.login' });
    return () => (
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' class='logo' alt='Vite logo' />
        </a>
        <a href='https://vuejs.org/' target='_blank'>
          <img src='./assets/vue.svg' class='logo vue' alt='Vue logo' />
        </a>
        <h1>{t('Sign In')}</h1>
        <p>
          <SvgIcon name={'bug'} size={20} />
        </p>
      </div>
    );
  },
});
