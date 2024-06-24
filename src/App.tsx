import { useTranslation } from 'i18next-vue';
import { defineComponent, reactive, ref, unref } from 'vue';
import { CSvgIcon } from './library/svg-icon';
import { APP_NAME } from './utils/variable';
import { ConfigProvider, Form, Input } from 'ant-design-vue';
import { CButton } from './library/button';
import { API } from './utils';

export interface LoginFormState {
  email: string;
  password: string;
  remember?: boolean;
}

export default defineComponent({
  name: 'App',

  setup() {
    const { t } = useTranslation('locale', { keyPrefix: 'pages.base.login' });
    const loginFormState = reactive<LoginFormState>({
      email: '',
      password: '',
    });
    const loading = ref(false);

    const handleLogin = async (form: LoginFormState) => {
      try {
        loading.value = true;
        await API.post({ url: '/auth/login', values: form });
      } finally {
        loading.value = false;
      }
    };

    return () => (
      <ConfigProvider
        theme={{
          token: {
            fontSize: 13,
            lineHeight: 1.847,
            controlHeight: 38,
            fontFamily:
              'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" ',
          },
        }}
      >
        <div className='l-login'>
          <div />
          <div className='mask'></div>
          <div className='wapper'>
            <div className='content intro-x'>
              <div className='t-head'>
                <div className='block-grap-1'>
                  <CSvgIcon name='logo' size={24} className='fill-primary' />
                  <h4>{APP_NAME}</h4>
                </div>
              </div>
              <div className='intro-x'>
                <h1>{t('Sign In')}</h1>
                <h5>{t('Enter your details to login to your account')}</h5>

                <Form model={loginFormState} autocomplete={false} onFinish={handleLogin}>
                  <Form.Item name='email' rules={[{ required: true, message: `required` }, { type: 'email' }]}>
                    <Input v-model:value={loginFormState.email} placeholder={t('Username')} />
                  </Form.Item>
                  <Form.Item name='password' rules={[{ required: true, message: `required` }]}>
                    <Input type='password' v-model:value={loginFormState.password} placeholder={t('Password')} />
                  </Form.Item>
                  <Form.Item>
                    <CButton isLoading={unref(loading)} text={t('Log In')} className='w-full' type='submit' />
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </ConfigProvider>
    );
  },
});
